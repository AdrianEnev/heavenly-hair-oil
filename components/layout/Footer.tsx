import { Button } from "@/components/ui/Button"
import product from "@/data/products/hair-oil.json"

export function Footer() {
    return (
        <footer id="shop" className="bg-[var(--color-brand-purple)] text-[var(--color-bg-cream)] py-16">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-serif mb-6">Experience Heavenly Hair</h2>
                <p className="mb-10 text-[var(--color-muted-gray)] max-w-lg mx-auto">
                    Deeply nourishing, lightweight, and made from nature's finest organic oils.
                    Available now on your favorite marketplaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button
                        variant="secondary"
                        className="w-full sm:w-auto min-w-[200px]"
                        href={product.amazonUrl}
                        external
                    >
                        Visit on Amazon
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto min-w-[200px] border-[var(--color-bg-cream)] text-[var(--color-bg-cream)] hover:bg-[var(--color-bg-cream)] hover:text-[var(--color-brand-purple)]"
                        href={product.etsyUrl}
                        external
                    >
                        Visit on Etsy
                    </Button>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-muted-gray)]">
                    <p>&copy; {new Date().getFullYear()} Heavenly Hair Oil. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/k.a.natural?igsh=M2JrdWV3b291bWQ3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                        <a href="/contact" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
