import Image from "next/image"
import { Button } from "@/components/ui/Button"
import product from "@/data/products/hair-oil.json"

export function CraftStory() {
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hair_oil_background.jpeg"
                    alt="Heavenly Hair Oil with natural ingredients"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                />
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-dusty-pink)]/20 backdrop-blur-sm border border-[var(--color-dusty-pink)]/30 text-[var(--color-dusty-pink)] text-sm font-medium tracking-[0.2em] uppercase">
                            Crafted with Care
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                            Nature&apos;s Essence,<br />Bottled with Love
                        </h2>

                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
                            Every bottle of Heavenly Hair Oil is carefully crafted with premium organic ingredients, sourced from nature, refined by science, and designed to transform your hair care ritual.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button
                            href={product.amazonUrl}
                            external
                            size="lg"
                            className="bg-[var(--color-dusty-pink)] text-[var(--color-brand-purple)] hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(217,161,171,0.4)] border-none font-medium"
                        >
                            Experience the Difference
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5]" />
        </section>
    )
}
