import Image from "next/image"
import { Button } from "@/components/ui/Button"
import product from "@/data/products/hair-oil.json"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-brand-purple)] text-[var(--color-text-light)]">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-brand-purple-600)] via-[var(--color-brand-purple)] to-[var(--color-brand-purple)]" />
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[var(--color-brand-purple-600)]/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[var(--color-dusty-pink)]/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 pt-32 pb-20 md:py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-8 lg:order-1 order-2">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="py-1 px-3 border border-[var(--color-dusty-pink)]/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-dusty-pink)]">
                                    The Ritual
                                </span>
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--color-text-light)]">
                                {product.hero.headline}
                            </h1>
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl font-light text-[var(--color-dusty-pink)]">
                                    {product.hero.subheading}
                                </p>
                                <p className="max-w-[540px] text-lg font-light leading-relaxed text-[var(--color-muted-gray)]">
                                    {product.hero.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Button
                                href={product.amazonUrl}
                                external
                                size="lg"
                                className="bg-[var(--color-dusty-pink)] text-[var(--color-brand-purple)] hover:bg-[var(--color-text-light)] transition-all duration-300 shadow-[0_0_20px_rgba(217,161,171,0.3)] border-none"
                            >
                                {product.hero.primaryButton}
                            </Button>
                            <Button
                                variant="outline"
                                href="#benefits"
                                size="lg"
                                className="border-[var(--color-dusty-pink)] text-[var(--color-dusty-pink)] hover:bg-[var(--color-dusty-pink)] hover:text-[var(--color-brand-purple)] transition-all duration-300"
                            >
                                {product.hero.secondaryButton}
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-light text-[var(--color-muted-gray)] pt-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-xs">A</div>
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-xs">B</div>
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-xs">C</div>
                            </div>
                            <p>Loved by 100+ customers</p>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative lg:order-2 order-1 perspective-1000 flex justify-center items-center">
                        {/* CSS-only Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-[var(--color-dusty-pink)]/20 to-transparent blur-[80px]" />

                        {/* Model Image - Left Pillar */}
                        <div className="absolute left-[-10%] md:left-[-5%] top-[-15%] w-[160px] md:w-[220px] h-[460px] md:h-[600px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl hidden md:block opacity-80 hover:opacity-100 transition-all duration-700 z-0 transform -rotate-6 hover:-rotate-3 hover:scale-105">
                            <Image
                                src="/images/hair_blond.jpeg"
                                alt="Radiant blonde hair results"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 0vw, 33vw"
                            />
                        </div>

                        {/* Model Image - Right Pillar */}
                        <div className="absolute right-[-10%] md:right-[-5%] top-[-5%] w-[160px] md:w-[220px] h-[460px] md:h-[600px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl hidden md:block opacity-80 hover:opacity-100 transition-all duration-700 z-0 transform rotate-6 hover:rotate-3 hover:scale-105">
                            <Image
                                src="/images/hair_brown.jpeg"
                                alt="Glossy brunette hair results"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 0vw, 33vw"
                            />
                        </div>

                        <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[480px] z-10">
                            {/* Main Image with Depth Styling */}
                            <div className="relative transform transition-transform hover:scale-[1.02] duration-700 ease-out">
                                <div className="relative rounded-t-[60px] rounded-b-[40px] overflow-hidden shadow-2xl shadow-black/40 border border-white/5 mx-auto w-[85%]">
                                    <Image
                                        src={product.images[0].src}
                                        alt={product.images[0].alt}
                                        width={600}
                                        height={950}
                                        className="w-full h-auto object-cover scale-110"
                                        priority
                                    />
                                    {/* Overlay Gradient for Mood */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-purple)]/60 via-transparent to-transparent opacity-80" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-[var(--color-dusty-pink)]/30 rounded-full opacity-60 animate-pulse-slow" />
                            <div className="absolute top-10 -left-10 w-20 h-20 border border-[var(--color-text-light)]/10 rounded-full opacity-40" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

