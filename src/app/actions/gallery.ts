"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const GallerySchema = z.object({
    title: z.string().optional(),
    url: z.string().url(),
    category: z.string().optional(),
});

export async function addImage(prevState: any, formData: FormData) {
    const validatedFields = GallerySchema.safeParse({
        title: formData.get("title"),
        url: formData.get("url"),
        category: formData.get("category"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Invalid Input. Failed to Add Image.",
        };
    }

    const { title, url, category } = validatedFields.data;

    try {
        await prisma.galleryImage.create({
            data: {
                title: title || null,
                url,
                category: category || "General",
            },
        });
        revalidatePath("/admin/gallery");
        return { message: null }; // Success
    } catch (error) {
        return {
            message: "Database Error: Failed to Add Image.",
        };
    }
}

export async function deleteImage(id: number) {
    try {
        await prisma.galleryImage.delete({
            where: { id },
        });
        revalidatePath("/admin/gallery");
    } catch (error) {
        return {
            message: "Database Error: Failed to Delete Image.",
        };
    }
}
