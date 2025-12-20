import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
    href?: string
    external?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", href, external, children, ...props }, ref) => {
        const variants = {
            primary: "bg-[var(--color-brand-purple)] text-white hover:bg-[var(--color-brand-purple-600)] shadow-md",
            secondary: "bg-[var(--color-dusty-pink)] text-white hover:opacity-90 shadow-sm",
            outline: "border border-[var(--color-dusty-pink)] text-[var(--color-brand-purple)] hover:bg-[var(--color-bg-cream)]",
            ghost: "text-[var(--color-brand-purple)] hover:bg-[var(--color-bg-cream)]",
        }

        const sizes = {
            default: "h-11 px-8 py-2 rounded-full",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8",
            icon: "h-10 w-10 rounded-full",
        }

        const baseStyles = "inline-flex items-center justify-center text-sm font-medium transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-dusty-pink)] disabled:opacity-50 disabled:pointer-events-none"

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

        if (href) {
            if (external) {
                return (
                    <a
                        href={href}
                        className={combinedClassName}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                )
            }
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                className={combinedClassName}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
