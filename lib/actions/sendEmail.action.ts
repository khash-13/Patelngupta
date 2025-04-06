"use server";

import nodemailer, { Transporter } from "nodemailer";

interface SendEmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string
): Promise<SendEmailResponse> => {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, //true for port: 465 otherwise false
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to yourself
    const mailOptionsToSelf = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${message}
        </p>
      `,
    };

    // Confirmation email to the user
    const mailOptionsToUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible. Here’s a summary of your message:</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          ${message}
        </p>
        <p>Best regards,<br>Your Company Name</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToSelf),
      transporter.sendMail(mailOptionsToUser),
    ]);

    return {
      success: true,
      message: "Emails sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send emails.",
    };
  }
};
