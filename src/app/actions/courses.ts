"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

const CourseSchema = z.object({
    title: z.string().min(3),
    type: z.string().optional(),
    price: z.coerce.number().min(0),
    description: z.string().optional(),
    image_url: z.string().url().optional().or(z.literal("")),
});

export async function createCourse(prevState: any, formData: FormData) {
    const validatedFields = CourseSchema.safeParse({
        title: formData.get("title"),
        type: formData.get("type"),
        price: formData.get("price"),
        description: formData.get("description"),
        image_url: formData.get("image_url"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Course.",
        };
    }

    const { title, type, price, description, image_url } = validatedFields.data;

    try {
        await prisma.course.create({
            data: {
                title,
                type: type || "Class",
                price,
                description: description || "",
                image_url: image_url || "",
                is_active: true,
            },
        });
    } catch (error) {
        return {
            message: "Database Error: Failed to Create Course.",
        };
    }

    revalidatePath("/admin/courses");
    redirect("/admin/courses");
}

export async function updateCourse(id: number, prevState: any, formData: FormData) {
    const validatedFields = CourseSchema.safeParse({
        title: formData.get("title"),
        type: formData.get("type"),
        price: formData.get("price"),
        description: formData.get("description"),
        image_url: formData.get("image_url"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Update Course.",
        };
    }

    const { title, type, price, description, image_url } = validatedFields.data;

    try {
        await prisma.course.update({
            where: { id },
            data: {
                title,
                type: type || "Class",
                price,
                description: description || "",
                image_url: image_url || "",
            },
        });
    } catch (error) {
        return {
            message: "Database Error: Failed to Update Course.",
        };
    }

    revalidatePath("/admin/courses");
    redirect("/admin/courses");
}

export async function deleteCourse(id: number) {
    try {
        await prisma.course.delete({
            where: { id },
        });
        revalidatePath("/admin/courses");
    } catch (error) {
        return {
            message: "Database Error: Failed to Delete Course.",
        };
    }
}
