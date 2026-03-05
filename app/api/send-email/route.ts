import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Lazy initialization - transporter created only when needed
let transporter: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
    if (transporter) {
        console.log('[Email] Reusing existing transporter')
        return transporter
    }

    console.log('[Email] Creating new transporter...')
    
    // Validate required environment variables
    const requiredEnvVars = [
        'SES_SMTP_HOST',
        'SES_SMTP_USER',
        'SES_SMTP_PASS',
        'EMAIL_FROM',
        'EMAIL_FROM_NAME',
        'EMAIL_SUPPORT',
    ]

    console.log('[Email] Checking environment variables...')
    const missingVars = requiredEnvVars.filter(varName => {
        const value = process.env[varName]
        const hasValue = !!value
        console.log(`[Email] ${varName}: ${hasValue ? 'SET' : 'MISSING'}`)
        return !hasValue
    })
    
    if (missingVars.length > 0) {
        console.error(`[Email] Missing required environment variables: ${missingVars.join(', ')}`)
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
    }

    const host = process.env.SES_SMTP_HOST
    const port = Number(process.env.SES_SMTP_PORT) || 587
    const user = process.env.SES_SMTP_USER
    
    console.log(`[Email] SMTP Config - Host: ${host}, Port: ${port}, User: ${user?.substring(0, 5)}...`)

    transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: false,
        auth: {
            user: user,
            pass: process.env.SES_SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: true,
        },
    })

    console.log('[Email] Transporter created successfully')
    return transporter
}

// Rate Limiting Configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3
const ipRequestMap = new Map<string, { count: number; lastRequest: number }>()

// Type for the request body
interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
    _gotcha?: string // Honeypot field
}

export async function POST(request: NextRequest) {
    console.log('[Email] Received POST request to /api/send-email')
    
    try {
        // Parse and validate request body
        console.log('[Email] Parsing request body...')
        const body: ContactFormData = await request.json()
        const { name, email, subject, message, _gotcha } = body
        console.log(`[Email] Form data - Name: ${name}, Email: ${email}, Subject: ${subject}`)

        // Honeypot check
        if (_gotcha) {
            console.log('[Email] Bot detected via honeypot. Request ignored.')
            return NextResponse.json(
                { message: 'Email sent successfully' },
                { status: 200 }
            )
        }

        // Rate Limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown'
        console.log(`[Email] Client IP: ${ip}`)
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
            console.log('[Email] Validation failed - missing fields')
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            console.log(`[Email] Validation failed - invalid email: ${email}`)
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Prepare email content
        console.log('[Email] Preparing email content...')
        const fromEmail = `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`
        const toEmail = process.env.EMAIL_SUPPORT
        console.log(`[Email] From: ${fromEmail}, To: ${toEmail}`)
        
        const mailOptions = {
            from: fromEmail,
            to: toEmail,
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            text: `
New Customer Email

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
                            <h2 style="margin: 0;">New Customer Email</h2>
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
        console.log('[Email] Attempting to send email...')
        const transporterInstance = getTransporter()
        console.log('[Email] Got transporter, calling sendMail...')
        const info = await transporterInstance.sendMail(mailOptions)
        console.log(`[Email] Email sent successfully! Message ID: ${info.messageId}`)

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('[Email] ERROR in POST handler:')
        console.error('[Email] Error type:', typeof error)
        console.error('[Email] Error name:', error instanceof Error ? error.name : 'Unknown')
        console.error('[Email] Error message:', error instanceof Error ? error.message : String(error))
        if (error instanceof Error && error.stack) {
            console.error('[Email] Error stack:', error.stack)
        }
        
        return NextResponse.json(
            { 
                error: 'Failed to send email. Please try again later.',
                debug: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

