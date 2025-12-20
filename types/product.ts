export interface Review {
    id: string;
    name: string;
    photo: string;
    rating: number;
    quote: string;
}

export interface ProductIngredient {
    name: string;
    note: string;
}

export interface ProductImage {
    src: string;
    alt: string;
}

export interface ProductColors {
    brand: string;
    accent: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    shortDescription: string;
    longDescription: string;
    colors: ProductColors;
    images: ProductImage[];
    ingredients: ProductIngredient[];
    amazonUrl: string;
    etsyUrl: string;
    reviews: Review[];
    createdAt: string;
}
