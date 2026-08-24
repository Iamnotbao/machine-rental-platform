# Machine Rental Admin

The Admin is the internal operations dashboard foundation for managing the machine-rental domain. It is a React, Vite, TypeScript application kept isolated from the customer Client.

## Development

```bash
npm run dev:admin
npm run build:admin
```

Configure `VITE_API_BASE_URL` and `VITE_APP_NAME` in a local `.env` from `.env.example` when a Backend is available.

## Architecture

`app/` composes providers and routing. `pages/` own route-level composition, while Admin-specific presentation lives in `components/` and `features/`. Hooks coordinate UI and authorization state; services are the only API boundary. The current dashboard uses clearly labelled demo data and does not call a Backend.

The application uses CSS Modules for component/page styles and `src/styles/variables.css` for global design tokens. TanStack Query is configured for future server state; narrow stores cover auth, navigation, and notifications.

## Routes

`/login`, `/dashboard`, `/machines`, `/machines/create`, `/machines/:id`, `/machines/:id/edit`, `/bookings`, `/bookings/:id`, `/orders`, `/orders/:id`, `/customers`, `/customers/:id`, `/payments`, `/reports`, and `/settings`.
