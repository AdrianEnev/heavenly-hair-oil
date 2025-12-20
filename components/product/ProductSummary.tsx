import { Zap, Check, Droplet, Star } from "lucide-react"
import product from "@/data/products/hair-oil.json"

export function ProductSummary() {
    return (
        <section id="benefits" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-dusty-pink)]/10 text-[var(--color-brand-purple)] text-sm font-medium">
                        Natural & Organic
                    </span>
                    <h2 className="text-3xl font-serif text-[var(--color-brand-purple)] md:text-4xl">
                        Why It Works
                    </h2>
                    <p className="text-[var(--color-muted-gray)] text-lg">
                        {product.shortDescription}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium text-[var(--color-brand-purple)] mb-4">Key Benefits</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-[var(--color-dusty-pink)]/20 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-[var(--color-brand-purple)]" />
                                    </div>
                                    <span className="text-[var(--color-muted-gray)]">Deeply softens the hair</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-[var(--color-dusty-pink)]/20 p-1 rounded-full">
                                        <Zap className="w-4 h-4 text-[var(--color-brand-purple)]" />
                                    </div>
                                    <span className="text-[var(--color-muted-gray)]">Light lamination effect after washing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-[var(--color-dusty-pink)]/20 p-1 rounded-full">
                                        <Droplet className="w-4 h-4 text-[var(--color-brand-purple)]" />
                                    </div>
                                    <span className="text-[var(--color-muted-gray)]">Makes hair very soft — especially the ends</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-[var(--color-dusty-pink)]/20 p-1 rounded-full">
                                        <Star className="w-4 h-4 text-[var(--color-brand-purple)]" />
                                    </div>
                                    <span className="text-[var(--color-muted-gray)]">Deeply nourishes for lasting shine</span>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="relative aspect-square bg-[var(--color-bg-cream)] rounded-2xl overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={product.images[1].src} alt={product.images[1].alt} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
