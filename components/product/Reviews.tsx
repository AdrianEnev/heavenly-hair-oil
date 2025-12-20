import Link from "next/link"
import product from "@/data/products/hair-oil.json"
import { Star } from "lucide-react"

export function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-[var(--color-bg-cream)]">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-serif text-[var(--color-brand-purple)] text-center mb-16 md:text-4xl">
                    Loved by our community
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {product.reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center text-center space-y-4">
                            <div className="flex gap-1 mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)]" />
                                ))}
                            </div>
                            <blockquote className="text-lg text-[var(--color-brand-purple)] italic">
                                &quot;{review.quote}&quot;
                            </blockquote>
                            <div className="mt-4 flex items-center gap-3">
                                {review.photo ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-dusty-pink)] flex items-center justify-center text-white font-serif">
                                        {review.name[0]}
                                    </div>
                                )}
                                <span className="font-medium text-[var(--color-brand-purple)]">{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
