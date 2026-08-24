# Machine Rental Platform

Machine Rental Platform is a TypeScript monorepo for a future equipment-rental product. Phase 1A provides the customer Client, reusable foundations, tooling, and project memory. The Admin app and Backend are deliberately not implemented yet.

## Architecture

- `apps/client` — Vite + React customer application.
- `apps/admin` — reserved for Phase 1B.
- `packages/ui` — generic UI primitives.
- `packages/types`, `packages/utils`, `packages/config` — small shared foundations.
- `docs` — synchronized architecture, business, and development documentation.

Read [AGENTS.md](AGENTS.md), then [architecture documentation](docs/architecture/overview.md) and [development documentation](docs/development/setup.md) before significant changes.

## Installation and development

```bash
npm install
npm run dev:client
```

Other commands:

```bash
npm run build:client
npm run lint
npm run typecheck
npm run format:check
```

## Deployment

Client deployment to Vercel, Netlify, or GitHub Pages is planned. Admin is planned for Vercel or Netlify, and the Backend will use separate infrastructure. See [deployment documentation](docs/development/deployment.md).
