# Ziad Alajwoa — Full-Stack Developer Portfolio

[View the live portfolio](https://ziyad543212-dev.github.io/portfolio-profissional/)

A React and TypeScript portfolio featuring Panel Cut Optimizer and the Al Madinah Hajj & Umrah Management System. The project cards include screenshots and technical highlights. The Al Madinah screenshot uses sample data.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npx tsc --noEmit
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The included `vercel.json` configures the build and asset caching for Vercel.

## Deploy to GitHub Pages

Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
The **Deploy portfolio** workflow checks TypeScript, builds the site, and publishes it on pushes to `main`.
You can also run the workflow manually from the **Actions** tab.

## Update portfolio content

- Project descriptions, technologies, and images live in `src/data/projects.ts`.
- The name, contact email, GitHub profile, and navigation labels live in `src/data/profile.ts`.
- The site description and social titles live in `index.html`.
