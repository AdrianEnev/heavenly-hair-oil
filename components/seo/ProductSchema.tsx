import product from "@/data/products/hair-oil.json"

export function ProductSchema() {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.shortDescription,
        "image": product.images.map(img => img.src).filter(Boolean),
        "brand": {
            "@type": "Brand",
            "name": "Heavenly Hair Oil"
        },
        // Aggregate rating from reviews
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": product.reviews.length.toString()
        },
        "review": product.reviews.map(review => ({
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString()
            },
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "reviewBody": review.quote
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
