# Architecture overview

This npm-workspace monorepo separates independently deployable applications from small shared packages.

- **Client** (`apps/client`) is the implemented customer web foundation built with React, Vite, React Router, TanStack Query, and CSS Modules.
- **Admin** (`apps/admin`) is an independently buildable React/Vite operations dashboard. It owns internal layouts, role/permission UI architecture, and management page foundations.
- **Shared packages** provide generic UI primitives, cross-app types, generic utilities, and small configuration foundations.
- **Backend** is planned as a separate application and is not implemented in this repository phase.

This separation prevents customer and Admin concerns from becoming coupled while allowing genuinely reusable code to live in `packages/`.

The Client landing page is documented separately in [homepage.md](homepage.md), including its section boundaries, mock-data seam, reusable UI primitives, and reduced-motion animation strategy.
