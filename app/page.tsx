import { Hero } from "@/components/product/Hero"
import { ProductSummary } from "@/components/product/ProductSummary"
import { Results } from "@/components/product/Results"
import { Ingredients } from "@/components/product/Ingredients"
import { CraftStory } from "@/components/product/CraftStory"
import { Reviews } from "@/components/product/Reviews"
import { ProductSchema } from "@/components/seo/ProductSchema"

export default function Home() {
    return (
        <>
            <ProductSchema />
            <Hero />
            <ProductSummary />
            <Results />
            <Ingredients />
            <CraftStory />
            <Reviews />
        </>
    );
}
