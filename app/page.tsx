import { Hero } from "@/components/product/Hero"
import { ProductSummary } from "@/components/product/ProductSummary"
import { Ingredients } from "@/components/product/Ingredients"
import { Reviews } from "@/components/product/Reviews"
import { ProductSchema } from "@/components/seo/ProductSchema"

export default function Home() {
    return (
        <>
            <ProductSchema />
            <Hero />
            <ProductSummary />
            <Ingredients />
            <Reviews />
        </>
    );
}
