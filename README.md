# Machine Rental Platform

Machine Rental Platform is a TypeScript monorepo for an equipment-rental product. The Client and Admin dashboard foundations are implemented; the Backend remains a future separate application.

## Architecture

- `apps/client` — Vite + React customer application.
- `apps/admin` — internal operations dashboard for fleet, booking, order, customer, payment, report, and settings foundations.
- `packages/ui` — generic UI primitives.
- `packages/types`, `packages/utils`, `packages/config` — small shared foundations.
- `docs` — synchronized architecture, business, and development documentation.

Read [AGENTS.md](AGENTS.md), then [architecture documentation](docs/architecture/overview.md) and [development documentation](docs/development/setup.md) before significant changes.

## Installation and development

```bash
npm install
npm run dev:client
npm run dev:admin
```

Other commands:

```bash
npm run build:client
npm run build:admin
npm run lint
npm run typecheck
npm run format:check
```

## Deployment

Client deployment to Vercel, Netlify, or GitHub Pages is planned. Admin deployment to Vercel or Netlify is planned, and the Backend will use separate infrastructure. See [deployment documentation](docs/development/deployment.md).
