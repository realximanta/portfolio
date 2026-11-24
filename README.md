# Tuku Portfolio

The portfolio at [ximanta.xyz](https://www.ximanta.xyz/) is a React and TypeScript application built with Vite. The small root `index.html` only supplies metadata and mounts `src/main.tsx`; all page content and styling live in `src/`.

The selected project catalogue is in `src/data/projects.ts`. It contains nine project cards covering ten repositories, including the Daymark Android app and its backend together. Descriptions and technologies are based on the repositories' READMEs and project configurations. The GitHub activity section displays the public contribution calendar for `realximanta`. Core sections render immediately rather than waiting for scroll-triggered animations.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. On Vercel, import this repository as a Vite project. The included `vercel.json` sets the build command and output directory. Deploy the repository, then point the custom domain `ximanta.xyz` at the Vercel project in its domain settings.
