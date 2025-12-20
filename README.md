# Heavenly Hair Oil Website

A premium, single-product portfolio website built with Next.js, Tailwind CSS, and TypeScript. Designed for a luxury hair oil brand with a focus on aesthetics, performance, and accessibility.

## key Features

- **Minimal Luxury Design**: Custom color tokens (Deep Purple, Dusty Pink).
- **Mobile-First**: Fully responsive layouts.
- **SEO Optimized**: JSON-LD Product Schema, meta tags.
- **Accessible**: Semantic HTML, visible focus states, WCAG compliant contrast.
- **No E-commerce Backend**: Direct links to Amazon and Etsy.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editing Content

The website content is driven by a JSON file located at `data/products/hair-oil.json`.

### Changing Text & Links
Edit `data/products/hair-oil.json` to update:
- **Product Name/Subtitle**: `name`, `subtitle`
- **Descriptions**: `shortDescription`, `longDescription`
- **Purchase Links**: `amazonUrl`, `etsyUrl`
- **Reviews**: Add or remove objects in the `reviews` array.

### Replacing Images
1. Place your new images in the `public/images/` folder (create `images` folder if missing).
2. Update the paths in `data/products/hair-oil.json`:
   - `images`: Array of product images.
   - `reviews`: `photo` field for each review.
   
   To use the placeholder images provided in the design logic, ensure `src` is empty strings or valid paths.

## Adding a Second Product

Currently, the site is optimized for a single featured product on the homepage. To add more:
1. Create a new JSON file in `data/products/` (e.g., `shampoo.json`).
2. Update `data/products/index.ts` (if you create a registry) or manually import it where needed.
3. You will need to create a new page route (e.g., `app/products/[slug]/page.tsx`) to display multiple products, as the Homepage (`app/page.tsx`) is currently hardcoded to import `hair-oil.json`.

## Testing

Run unit tests and accessibility checks:

```bash
npm test
```

## Deployment

The project is ready for deployment on Vercel.

1. Push code to GitHub/GitLab.
2. Import project into Vercel.
3. Vercel will auto-detect Next.js and deploy.

### Build Locally

```bash
npm run build
npm start
```
