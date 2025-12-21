"use client";

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out border-b",
                isScrolled
                    ? "bg-[var(--color-brand-purple)]/80 backdrop-blur-xl shadow-lg py-3 border-white/5"
                    : "bg-transparent py-6 border-white/10"
            )}
        >
            <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
                <Link
                    href="/"
                    className={cn(
                        "text-xl font-serif tracking-widest font-medium transition-colors duration-300",
                        isScrolled ? "text-[var(--color-text-light)]" : "text-[var(--color-text-light)]"
                    )}
                >
                    Heavenly Hair Oil
                </Link>
                <nav className="flex gap-4 items-center">
                    <Button
                        variant="ghost"
                        href="#benefits"
                        className={cn(
                            "hidden md:inline-flex hover:scale-105 transition-all duration-300 font-light tracking-wide",
                            "text-[var(--color-text-light)] hover:text-[var(--color-dusty-pink)] hover:bg-transparent"
                        )}
                    >
                        Benefits
                    </Button>
                    <Button
                        variant="ghost"
                        href="#reviews"
                        className={cn(
                            "hidden md:inline-flex hover:scale-105 transition-all duration-300 font-light tracking-wide",
                            "text-[var(--color-text-light)] hover:text-[var(--color-dusty-pink)] hover:bg-transparent"
                        )}
                    >
                        Reviews
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            alert("Amazon link here");
                        }}
                        className={cn(
                            "ml-2 transition-all duration-300 border-[var(--color-dusty-pink)] text-[var(--color-dusty-pink)] hover:bg-[var(--color-dusty-pink)] hover:text-[var(--color-brand-purple)]",
                            isScrolled ? "shadow-md bg-transparent" : "bg-transparent/10 backdrop-blur-sm"
                        )}
                    >
                        Shop Now
                    </Button>
                </nav>
            </div>
        </header>
    )
}
