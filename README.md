# AntV New Site 📈

New AntV site built on [@antv/site](https://github.com/antvis/site).

![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Local development

```sh
pnpm install
pnpm dev
```

Local development starts at http://localhost:4321. Both `/zh/` and `/en/` are available.

## Validation and deployment

```sh
pnpm check       # Astro / TypeScript diagnostics
pnpm build       # Build the static site
pnpm preview     # Preview the built site
```

CI runs the type check and static site build.
