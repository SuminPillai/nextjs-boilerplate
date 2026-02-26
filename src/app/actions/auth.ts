"use server";

import { verifyPassword } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return { error: "Please fill in all fields." };
    }

    try {
        const admin = await prisma.admin.findUnique({
            where: { username },
        });

        if (!admin) {
            return { error: "Invalid username or password." };
        }

        const isValid = await verifyPassword(password, admin.password_hash);

        if (!isValid) {
            return { error: "Invalid username or password." };
        }

        // Set session cookie
        // In a real app, use a secure session library like iron-session or next-auth
        // For this migration matching PHP simplicity, we'll use a simple signed cookie or similar
        // But for now, let's just set a simple indicator cookie (secure, httpOnly)
        // Note: This is a basic implementation. For production, consider robust session management.

        (await cookies()).set("admin_session", JSON.stringify({ id: admin.id, username: admin.username }), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });

    } catch (error) {
        console.error("Login error:", error);
        return { error: "System error: Could not log in." };
    }

    redirect("/admin");
}

export async function logout() {
    (await cookies()).delete("admin_session");
    redirect("/admin/login");
}
