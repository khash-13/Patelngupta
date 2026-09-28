// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Escape user input before putting it in HTML emails (prevents HTML injection)
const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "N/A";
    const message = body.message?.trim();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD, // use a Gmail App Password
      },
    });

    // Email to yourself
    const mailToSelf = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color:#f9f9f9;padding:10px;border-radius:5px;">
          ${safeMessage}
        </p>
      `,
    };

    // Confirmation email to the user
    const mailToUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${name.replace(/[\r\n]/g, " ")}!`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${safeName},</p>
        <p>We have received your message and will get back to you as soon as possible. Here's a summary of your message:</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color:#f9f9f9;padding:10px;border-radius:5px;">
          ${safeMessage}
        </p>
        <p>Best regards,<br>Your Company Name</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailToSelf),
      transporter.sendMail(mailToUser),
    ]);

    return NextResponse.json(
      { success: true, message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send emails." },
      { status: 500 }
    );
  }
}