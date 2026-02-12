import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SES_SMTP_HOST,
    port: Number(process.env.SES_SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SES_SMTP_USER,
        pass: process.env.SES_SMTP_PASS,
    },
})

// Type for the request body
interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export async function POST(request: NextRequest) {
    try {
        // Parse and validate request body
        const body: ContactFormData = await request.json()
        const { name, email, subject, message } = body

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Prepare email content
        const mailOptions = {
            from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_FROM, // Send to your own email
            replyTo: email, // Allow direct reply to the sender
            subject: `Contact Form: ${subject}`,
            text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Heavenly Hair Oil Contact Form
            `.trim(),
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                        .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; }
                        .field { margin-bottom: 15px; }
                        .label { font-weight: bold; color: #6B46C1; }
                        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
                        .footer { background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="margin: 0;">New Contact Form Submission</h2>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">From:</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">Email:</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            <div class="field">
                                <div class="label">Subject:</div>
                                <div class="value">${subject}</div>
                            </div>
                            <div class="field">
                                <div class="label">Message:</div>
                                <div class="value">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                        </div>
                        <div class="footer">
                            Sent from Heavenly Hair Oil Contact Form
                        </div>
                    </div>
                </body>
                </html>
            `,
        }

        // Send email via Nodemailer
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        )
    }
}

