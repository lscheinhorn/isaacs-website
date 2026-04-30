# Isaac's Landscaping Website

React, Vite, and Tailwind CSS site for Isaac's Landscaping.

## Local Development

Use Node 20. If you use `nvm`, run:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

## Deployment

The site is configured for GitHub Pages at:

```text
https://lscheinhorn.github.io/isaacs-website/
```

Deployment runs through GitHub Actions in `.github/workflows/deploy.yml` whenever changes are pushed to `main`.

The app uses hash routing so GitHub Pages can serve nested pages without a custom server fallback.

## Content Notes

Before treating the site as final, replace placeholder contact details and swap in real project photos when available.
