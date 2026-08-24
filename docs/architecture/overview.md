# Architecture overview

This npm-workspace monorepo separates independently deployable applications from small shared packages.

- **Client** (`apps/client`) is the implemented customer web foundation built with React, Vite, React Router, TanStack Query, and CSS Modules.
- **Admin** (`apps/admin`) is reserved for Phase 1B and has no source application yet.
- **Shared packages** provide generic UI primitives, cross-app types, generic utilities, and small configuration foundations.
- **Backend** is planned as a separate application and is not implemented in this repository phase.

This separation prevents customer and Admin concerns from becoming coupled while allowing genuinely reusable code to live in `packages/`.
