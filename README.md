# PrintForge

A multi-page website for browsing 3D-printable models, built with the **Next.js App Router**. Users can explore a catalog of models, filter them by category and open a detail page for each one.

## Features

- Model catalog with a responsive card grid
- Category navigation using dynamic routes (`/3d-models/categories/[categoryName]`)
- Individual model pages using dynamic routes (`/3d-models/[id]`)
- Shared layouts and an active-link navigation bar
- Typed data layer that reads models and categories from JSON

## Tech stack

Next.js · React · TypeScript · Tailwind CSS

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Project structure

```
app/
├── 3d-models/    Catalog, category and model detail routes
├── about/        About page
├── components/   Navbar, model cards, grid, category navigation
├── data/         Model and category data (JSON)
├── lib/          Data access helpers
└── types/        Shared TypeScript types
```

## Credits

Built while following Bob Ziroll's [Learn Next.js](https://scrimba.com/learn-nextjs-c02moisq6a) course on Scrimba.
