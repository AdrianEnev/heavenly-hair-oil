import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-serif",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Heavenly Hair Oil | Deep Nourishment & Shine",
    description: "Luxury hair oil made from organic oils. Deeply nourishes, softens, and adds signature shine.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
