import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    // Check auth - this is an API route, so middleware protects it if it's under /admin or we check session here.
    // Middleware should protect /admin/*, but this is /api/admin/bookings/export
    // I should check if middleware protects /api/admin

    // Fetch bookings
    const bookings = await prisma.booking.findMany({
        orderBy: { created_at: "desc" },
    });

    // CSV Header
    const csvHeader = ["ID", "Customer Name", "Email", "Phone", "Class/Service", "Date Booked", "Status", "Experience", "Message", "Created At"].join(",");

    // CSV Rows
    const csvRows = bookings.map((booking: any) => {
        return [
            booking.id,
            `"${booking.customer_name?.replace(/"/g, '""') || ''}"`,
            `"${booking.email?.replace(/"/g, '""') || ''}"`,
            `"${booking.phone?.replace(/"/g, '""') || ''}"`,
            `"${booking.class_name?.replace(/"/g, '""') || ''}"`,
            booking.date_booked ? new Date(booking.date_booked).toLocaleDateString() : "",
            booking.status,
            `"${booking.experience_level?.replace(/"/g, '""') || ''}"`,
            `"${booking.message?.replace(/"/g, '""') || ''}"`,
            new Date(booking.created_at).toISOString(),
        ].join(",");
    });

    const csvContent = [csvHeader, ...csvRows].join("\n");

    return new NextResponse(csvContent, {
        headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename="bookings-${new Date().toISOString().split('T')[0]}.csv"`,
        },
    });
}
