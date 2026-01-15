import product from "@/data/products/hair-oil.json"

export function Ingredients() {
    return (
        <section id="ingredients" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Left */}
                    <div className="relative bg-[var(--color-bg-cream)] rounded-2xl overflow-hidden order-2 md:order-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/hair_oil_packaging_crop_large.jpg"
                            alt="Heavenly Hair Oil Ingredients Label"
                            className="w-full h-auto scale-[1.1]"
                        />
                    </div>

                    {/* Content Side - Right */}
                    <div className="space-y-8 order-1 md:order-2 max-w-[80%]">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-dusty-pink)]/10 text-[var(--color-brand-purple)] text-sm font-medium mb-4">
                                Pure & Potent
                            </span>
                            <h2 className="text-3xl font-serif text-[var(--color-brand-purple)] md:text-4xl mb-6">
                                Nature&apos;s Best Ingredients
                            </h2>
                            <p className="text-[var(--color-muted-gray)] text-lg leading-relaxed">
                                Our formula is a carefully curated blend of powerful natural oils, each chosen for its specific benefits to your hair&apos;s health and appearance.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {product.ingredients.map((ing) => (
                                <div key={ing.name} className="flex gap-4 items-baseline">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-gold)] shrink-0 translate-y-2" />
                                    <div>
                                        <span className="font-bold text-[var(--color-brand-purple)] text-lg block mb-1">
                                            {ing.name}
                                        </span>
                                        <span className="text-[var(--color-muted-gray)] leading-relaxed">
                                            {ing.note}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-black/5">
                            <p className="text-[var(--color-brand-purple)] font-medium italic">
                                ...and more (listed in the packaging)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
