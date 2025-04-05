import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            replyTo: email,
            subject: `New Contact Submission from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 },
        );
    }
}
