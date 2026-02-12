"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/Button"
import { Mail, MessageSquare, User, Send, MapPin, Instagram } from "lucide-react"

export function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        _gotcha: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus("success")
                setFormState({ name: "", email: "", subject: "", message: "", _gotcha: "" })

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000)
            } else {
                setSubmitStatus("error")
                console.error('Error:', data.error)

                // Reset error message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000)
            }
        } catch (error) {
            console.error('Failed to send email:', error)
            setSubmitStatus("error")

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg-cream)]">
            {/* Hero Section */}
            <section className="relative bg-[var(--color-brand-purple)] text-[var(--color-text-light)] py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-brand-purple-600)] via-[var(--color-brand-purple)] to-[var(--color-brand-purple)]" />
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[var(--color-brand-purple-600)]/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[var(--color-dusty-pink)]/10 rounded-full blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <div className="inline-block mb-6">
                        <span className="py-1 px-3 border border-[var(--color-dusty-pink)]/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-dusty-pink)]">
                            Get in Touch
                        </span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        We'd Love to Hear From You
                    </h1>
                    <p className="text-lg md:text-xl font-light text-[var(--color-muted-gray)] max-w-2xl mx-auto">
                        Have a question about our products? Want to share your experience?
                        We're here to help and would love to connect with you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brand-purple)] mb-6">
                                    Let's Connect
                                </h2>
                                <p className="text-[var(--color-muted-gray)] leading-relaxed">
                                    Whether you have questions about ingredients, want personalized hair care advice,
                                    or just want to say hello, we're always happy to chat.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Contact Card */}
                                <div className="group p-6 bg-white rounded-2xl border border-[var(--color-brand-purple)]/10 hover:border-[var(--color-dusty-pink)]/30 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-dusty-pink)]/10 flex items-center justify-center group-hover:bg-[var(--color-dusty-pink)]/20 transition-colors">
                                            <Mail className="w-5 h-5 text-[var(--color-dusty-pink)]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[var(--color-brand-purple)] mb-1">Email Us</h3>
                                            <a
                                                href="mailto:contact.kanatural@gmail.com"
                                                className="text-[var(--color-muted-gray)] hover:text-[var(--color-dusty-pink)] transition-colors"
                                            >
                                                contact.kanatural@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Card */}
                                <div className="group p-6 bg-white rounded-2xl border border-[var(--color-brand-purple)]/10 hover:border-[var(--color-dusty-pink)]/30 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-dusty-pink)]/10 flex items-center justify-center group-hover:bg-[var(--color-dusty-pink)]/20 transition-colors">
                                            <Instagram className="w-5 h-5 text-[var(--color-dusty-pink)]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[var(--color-brand-purple)] mb-1">Follow Us</h3>
                                            <a
                                                href="https://www.instagram.com/k.a.natural?igsh=M2JrdWV3b291bWQ3&utm_source=qr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--color-muted-gray)] hover:text-[var(--color-dusty-pink)] transition-colors"
                                            >
                                                @k.a.natural
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Card 
                                <div className="group p-6 bg-white rounded-2xl border border-[var(--color-brand-purple)]/10 hover:border-[var(--color-dusty-pink)]/30 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-dusty-pink)]/10 flex items-center justify-center group-hover:bg-[var(--color-dusty-pink)]/20 transition-colors">
                                            <MapPin className="w-5 h-5 text-[var(--color-dusty-pink)]" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[var(--color-brand-purple)] mb-1">Location</h3>
                                            <p className="text-[var(--color-muted-gray)]">
                                                Handcrafted with love<br />
                                                United Kingdom
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[var(--color-brand-purple)]/5">
                                <div className="mb-8">
                                    <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-brand-purple)] mb-2">
                                        Send Us a Message
                                    </h3>
                                    <p className="text-[var(--color-muted-gray)]">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                {submitStatus === "success" && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3">
                                        <Send className="w-5 h-5" />
                                        <span>Thank you! Your message has been sent successfully.</span>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Sorry, there was an error sending your message. Please try again or email us directly.</span>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-brand-purple)] mb-2">
                                            Your Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-gray)]" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 border border-[var(--color-brand-purple)]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-dusty-pink)] focus:border-transparent transition-all"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-brand-purple)] mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-gray)]" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 border border-[var(--color-brand-purple)]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-dusty-pink)] focus:border-transparent transition-all"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-brand-purple)] mb-2">
                                            Subject *
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-gray)]" />
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 border border-[var(--color-brand-purple)]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-dusty-pink)] focus:border-transparent transition-all"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-brand-purple)] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3.5 border border-[var(--color-brand-purple)]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-dusty-pink)] focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us what's on your mind..."
                                        />
                                    </div>

                                    {/* Honeypot Field - Hidden from users */}
                                    <div style={{ display: "none" }} aria-hidden="true">
                                        <label htmlFor="_gotcha">Don't fill this out if you're human:</label>
                                        <input
                                            type="text"
                                            id="_gotcha"
                                            name="_gotcha"
                                            value={formState._gotcha}
                                            onChange={handleChange}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg"
                                        className="w-full bg-[#7a3d47] text-white hover:bg-[var(--color-dusty-pink)]/90 transition-all duration-300 shadow-[0_0_20px_rgba(217,161,171,0.3)] border-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
