import Image from "next/image"
import { Button } from "@/components/ui/Button"
import product from "@/data/products/hair-oil.json"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[var(--color-bg-cream)] pt-16 md:pt-24 lg:pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-serif font-medium tracking-tight text-[var(--color-brand-purple)] sm:text-5xl md:text-6xl lg:text-7xl">
                                {product.name}
                            </h1>
                            <p className="max-w-[600px] text-lg text-[var(--color-muted-gray)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {product.subtitle}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href={product.amazonUrl} external size="lg">
                                Visit on Amazon
                            </Button>
                            <Button variant="outline" href={product.etsyUrl} external size="lg">
                                Visit on Etsy
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-[var(--color-muted-gray)]">
                            <div className="flex -space-x-2">
                                {/* Placeholder for small avatars if we had them, or just stars */}
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                            </div>
                            <p>Loved by 100+ customers</p>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                            <Image
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] bg-[var(--color-dusty-pink)]/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
