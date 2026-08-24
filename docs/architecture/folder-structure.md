# Folder structure

`apps/` contains deployable applications and `packages/` contains reusable, app-neutral code. Within each app `src/`, `app/` owns composition, providers, and routing; `pages/` maps URLs to screen composition; `components/` contains reusable presentation; and `features/` groups domain-oriented presentation.

`hooks/` coordinates reusable UI or feature behavior. `services/` holds API-facing code. `store/` is narrowly scoped client state. `types/`, `constants/`, `configs/`, and `utils/` contain client-specific models, stable values, configuration access, and helpers. `styles/` holds global tokens and foundations; individual components/pages use CSS Modules. `assets/` and `public/` are for static visual files when needed. `tests/` is reserved for future tests.

Admin additionally organizes domain pages for Dashboard, Machines, Bookings, Orders, Customers, Payments, Reports, Settings, Auth, and error states. Its components include a responsive Sidebar/Topbar layout, DataTable, state views, notifications, and modal foundations.

Package folders have one responsibility: `ui` for generic components, `types` for cross-app types, `utils` for generic helpers, and `config` for shared configuration. Do not place rental business rules in shared utilities.
