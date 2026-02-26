import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { name, email, phone, subject, message } = data;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "All required fields must be filled." },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Construct the WhatsApp deep link for fallback
        const whatsappText = `*New Inquiry from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || "Not provided"}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
        const whatsappUrl = `https://wa.me/918979095535?text=${encodeURIComponent(whatsappText)}`;

        // Attempt to send email via a third-party service or SMTP
        // For now, we log the submission and return success with WhatsApp fallback
        // In production, integrate with Resend, SendGrid, Nodemailer, etc.
        console.log("=== NEW CONTACT FORM SUBMISSION ===");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone || "N/A"}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log("===================================");

        return NextResponse.json({
            success: true,
            message: "Your message has been received! We will get back to you shortly.",
            whatsappUrl,
        });
    } catch {
        return NextResponse.json(
            { success: false, message: "An error occurred. Please try again." },
            { status: 500 }
        );
    }
}
