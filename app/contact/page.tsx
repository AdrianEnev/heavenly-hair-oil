import { Metadata } from "next"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = {
    title: "Contact Us | Heavenly Hair Oil",
    description: "Get in touch with Heavenly Hair Oil. We'd love to hear from you about our natural hair care products.",
}

export default function ContactPage() {
    return <ContactForm />
}
