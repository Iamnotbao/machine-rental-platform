# Client routing

The current Client route foundation is:

| Route | Purpose |
| --- | --- |
| `/` | Customer landing page |
| `/auth` | Client authentication screen |
| `/machines` | Machine configuration catalog |
| `/providers/:providerId/machines` | Machine configurations filtered by provider |
| `/machines/:id` | Machine configuration detail and available instances |
| `/booking` | Booking quantity/duration step |
| `/checkout` | Checkout foundation |
| `/order-success` | Booking/payment success state |
| `/account` | Customer account foundation |

The machine/provider paths are deliberately distinct so a provider id cannot collide with a machine configuration id. `ROUTES` is the source of truth for route strings, and `routes.tsx` creates the React Router browser router from those constants.

The older `/machines/:id/booking`, `/cart`, `/orders`, `/orders/:id`, `/profile`, `/login`, and `/register` constants remain available while their full flows are being migrated. Authentication is still a local frontend foundation; backend authorization remains the security boundary once the Backend is introduced.

## Admin routes

The Admin route map is `/login`, `/dashboard`, `/machines`, `/machines/create`, `/machines/:id`, `/machines/:id/edit`, `/bookings`, `/bookings/:id`, `/orders`, `/orders/:id`, `/customers`, `/customers/:id`, `/payments`, `/reports`, and `/settings`. `ProtectedRoute` guards dashboard routes, while `RoleRoute` is available for future role-specific branches. The current local demo session makes the dashboard previewable without a Backend.
