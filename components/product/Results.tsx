import Image from "next/image"
import product from "@/data/products/hair-oil.json"

export function Results() {
    const { results } = product

    return (
        <section className="py-8 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-dusty-pink)]/10 text-[var(--color-brand-purple)] text-sm font-medium">
                        Real Results
                    </span>
                    <h2 className="text-3xl font-serif text-[var(--color-brand-purple)] md:text-4xl">
                        {results.title}
                    </h2>
                    <p className="text-[var(--color-muted-gray)] text-lg max-w-2xl mx-auto">
                        {results.intro}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                        {/* Blonde Image - Left */}
                        <div className="w-48 md:w-56 lg:w-64 flex-shrink-0">
                            <div className="group relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/16]">
                                <Image
                                    src="/images/hair_blond_cropped.jpeg"
                                    alt="Radiant blonde hair - Karolina or Anastasia"
                                    fill
                                    className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                                    sizes="256px"
                                />
                            </div>
                        </div>

                        {/* Text Content - Center */}
                        <div className="flex-1 space-y-3 px-4 md:px-8">
                            {/* Mission Text */}
                            <div className="space-y-1 text-center">
                                {results.paragraphs.map((p, i) => (
                                    <p key={i} className="text-[var(--color-muted-gray)] text-base leading-snug">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* Separator */}
                            <div className="text-center text-lg text-[var(--color-dusty-pink)]">
                                ⸻
                            </div>

                            {/* Our Story Text */}
                            <div className="space-y-1 text-center">
                                <h3 className="text-xl md:text-2xl font-serif text-[var(--color-brand-purple)]">
                                    {results.story.title}
                                </h3>
                                {results.story.paragraphs.map((p, i) => (
                                    <p key={i} className="text-[var(--color-muted-gray)] text-base leading-snug">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Brunette Image - Right */}
                        <div className="w-48 md:w-56 lg:w-64 flex-shrink-0">
                            <div className="group relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/16]">
                                <Image
                                    src="/images/hair_brown_cropped.jpeg"
                                    alt="Glossy brunette hair - Karolina or Anastasia"
                                    fill
                                    className="object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-105"
                                    sizes="256px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
