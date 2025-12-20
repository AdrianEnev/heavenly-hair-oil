import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[var(--color-bg-cream)]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-xl font-serif tracking-wide text-[var(--color-brand-purple)] font-medium">
                    Heavenly Hair Oil
                </Link>
                <nav className="flex gap-4">
                    <Button
                        variant="ghost"
                        href="#benefits"
                        className="hidden md:inline-flex hover:scale-105 transition-transform duration-200"
                    >
                        Benefits
                    </Button>
                    <Button
                        variant="ghost"
                        href="#reviews"
                        className="hidden md:inline-flex hover:scale-105 transition-transform duration-200"
                    >
                        Reviews
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        href="#shop"
                        className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Shop
                    </Button>
                </nav>
            </div>
        </header>
    )
}
