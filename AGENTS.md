# Machine Rental Platform: Engineering Context

Read this file and the relevant `docs/` pages before modifying the project.

## Architecture

The repository is an npm-workspace monorepo:

- `apps/client` — customer-facing React application.
- `apps/admin` — internal operations dashboard foundation, independently buildable and isolated from Client.
- `packages/ui` — generic reusable UI primitives only.
- `packages/types` — types genuinely shared by multiple apps.
- `packages/utils` — generic, domain-agnostic utilities.
- `packages/config` — small shared configuration foundations.

The Backend is a future, separate application. It is not part of this repository foundation yet.

## Data flow

`Page -> Feature -> Hook -> Service -> API Client -> Backend`

Pages compose UI; features hold domain-oriented presentation; hooks coordinate server state; services access APIs through the API client. Components must never call APIs directly.

## Engineering rules

- Use TypeScript strict mode and avoid `any`.
- Keep business logic out of page components and avoid giant components or CSS files.
- Use CSS Modules for component/page styling and shared design tokens from `styles/variables.css`.
- Use services for API access and TanStack Query for server state; local state is for local UI.
- Use route and status constants instead of hard-coded strings.
- Do not create unnecessary abstractions or duplicate code.
- Keep Client and Admin isolated. Do not modify unrelated areas.
- Frontend role checks are UX architecture only; Backend authorization remains the security boundary.
- When architecture, routing, business flow, or conventions change, update the matching `docs/` page in the same change.

## Git safety

Never use `git reset --hard`, `git clean -fd`, `git push --force`, or rewrite history unless explicitly requested. Before committing, inspect `git status` and `git diff`. Do not commit unless asked.
