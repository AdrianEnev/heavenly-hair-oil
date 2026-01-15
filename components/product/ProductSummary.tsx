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
                        7 Key Benefits of Heavenly Hair Oil
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <ul className="space-y-6">
                                {product.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 bg-[var(--color-dusty-pink)]/20 p-1 rounded-full shrink-0">
                                            <Check className="w-4 h-4 text-[var(--color-brand-purple)]" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-[var(--color-brand-purple)] mb-1">
                                                {benefit.title}
                                            </span>
                                            <span className="text-[var(--color-muted-gray)] leading-relaxed">
                                                {benefit.description}
                                            </span>
                                        </div>
                                    </li>
                                ))}
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
