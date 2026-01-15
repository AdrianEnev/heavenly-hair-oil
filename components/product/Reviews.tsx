import Link from "next/link"
import product from "@/data/products/hair-oil.json"
import { Star, Quote } from "lucide-react"

export function Reviews() {
    // Select curated reviews: Emily (0), Laura (2), Natalie (5)
    // 0: "My hair has never felt this soft."
    // 2: "Salon results at home."
    // 5: "Smells divine and works beautifully."
    const selectedReviews = [product.reviews[0], product.reviews[2], product.reviews[5]]

    return (
        <section id="reviews" className="py-24 bg-[var(--color-bg-cream)]">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-serif text-[var(--color-brand-purple)] text-center mb-16 md:text-4xl">
                    Customer Feedback
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {selectedReviews.map((review) => (
                        <div
                            key={review.id}
                            className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl border border-black/5 flex flex-col items-center text-center space-y-5 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="flex gap-1 mb-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)]" />
                                ))}
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif text-[var(--color-brand-purple)] leading-snug">
                                &quot;{review.headline}&quot;
                            </h3>

                            <p className="text-[var(--color-muted-gray)] leading-relaxed italic relative z-10">
                                {review.quote}
                            </p>

                            <div className="mt-2 pt-5 border-t border-[var(--color-brand-purple)]/5 w-full flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    {review.photo ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-dusty-pink)] flex items-center justify-center text-white font-serif shadow-inner">
                                            {review.name[0]}
                                        </div>
                                    )}
                                    <span className="font-medium text-[var(--color-brand-purple)] tracking-wide text-sm uppercase">{review.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
