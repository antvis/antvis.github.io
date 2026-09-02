# AntV Site

The AntV full-stack visualization website is built with the sibling
[`@antv/site`](../site-platform) platform package.

The shared platform provides routing, documentation, search, the AntV header and
footer, and default design tokens. This repository owns the organization homepage,
product content, visual assets, and design-language documentation.

The site requires Node.js 22.12 or newer and pnpm 10.34.5.

## Install & Preview

```bash
nvm use
corepack pnpm@10.34.5 --dir ../site-platform install --frozen-lockfile --ignore-scripts
corepack pnpm@10.34.5 --dir ../site-platform build
corepack pnpm@10.34.5 install
corepack pnpm@10.34.5 start
```

`@antv/site` is linked from `../site-platform` through pnpm's `link:` protocol.
Install and build the platform first so its dependencies and compiled integration are
available to this repository.

CI and deployment pin a known-compatible `antvis/site` revision by default. Set the
`ANTV_SITE_PLATFORM_REPOSITORY` and `ANTV_SITE_PLATFORM_REF` repository variables to
test a different platform fork or revision.

The development server prints its local URL after startup.

## Validation

```bash
corepack pnpm@10.34.5 check
corepack pnpm@10.34.5 build
```

## Deploy

```bash
corepack pnpm@10.34.5 deploy
```

The legacy `.dumirc.ts`, `.dumi/`, and React components under `site/components/` are
retained as migration reference. The production homepage is mounted through the
`slots.home.hero` entry in `astro.config.mjs`. Its QA entry is provided by
`@antv/site/qa-entry`; the platform owns the shared service endpoints and standard
preview adapters, while the consumer selects the default stack and enabled products.
