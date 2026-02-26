"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

const PostSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3).regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with dashes"),
    summary: z.string().optional(),
    content: z.string().min(10),
    image_url: z.string().url().optional().or(z.literal("")),
    is_published: z.coerce.boolean(),
});

export async function createPost(prevState: any, formData: FormData) {
    const validatedFields = PostSchema.safeParse({
        title: formData.get("title"),
        slug: formData.get("slug"),
        summary: formData.get("summary"),
        content: formData.get("content"),
        image_url: formData.get("image_url"),
        is_published: formData.get("is_published") === "on",
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Post.",
        };
    }

    const { title, slug, summary, content, image_url, is_published } = validatedFields.data;

    try {
        await prisma.post.create({
            data: {
                title,
                slug,
                summary: summary || "",
                content,
                image_url: image_url || "",
                is_published,
            },
        });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return {
                message: "Slug already exists. Please choose a unique slug.",
                errors: { slug: ["Slug must be unique"] }
            }
        }
        return {
            message: "Database Error: Failed to Create Post.",
        };
    }

    revalidatePath("/admin/posts");
    redirect("/admin/posts");
}

export async function updatePost(id: number, prevState: any, formData: FormData) {
    const validatedFields = PostSchema.safeParse({
        title: formData.get("title"),
        slug: formData.get("slug"),
        summary: formData.get("summary"),
        content: formData.get("content"),
        image_url: formData.get("image_url"),
        is_published: formData.get("is_published") === "on",
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Update Post.",
        };
    }

    const { title, slug, summary, content, image_url, is_published } = validatedFields.data;

    try {
        await prisma.post.update({
            where: { id },
            data: {
                title,
                slug,
                summary: summary || "",
                content,
                image_url: image_url || "",
                is_published,
            },
        });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return {
                message: "Slug already exists. Please choose a unique slug.",
                errors: { slug: ["Slug must be unique"] }
            }
        }
        return {
            message: "Database Error: Failed to Update Post.",
        };
    }

    revalidatePath("/admin/posts");
    redirect("/admin/posts");
}

export async function deletePost(id: number) {
    try {
        await prisma.post.delete({
            where: { id },
        });
        revalidatePath("/admin/posts");
    } catch (error) {
        return {
            message: "Database Error: Failed to Delete Post.",
        };
    }
}
