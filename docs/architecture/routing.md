# Client routing

The implemented Client route foundation is:

| Route                   | Purpose               |
| ----------------------- | --------------------- |
| `/`                     | Customer landing page |
| `/machines`             | Machine catalog       |
| `/machines/:id`         | Machine detail        |
| `/machines/:id/booking` | Booking start         |
| `/cart`                 | Customer cart         |
| `/checkout`             | Checkout foundation   |
| `/orders`               | Customer orders       |
| `/orders/:id`           | Order detail          |
| `/profile`              | Customer profile      |
| `/login`                | Sign in               |
| `/register`             | Registration          |

`ProtectedRoute` redirects unauthenticated access to customer-only routes to login. `PublicRoute` prevents an authenticated customer from returning to authentication pages. Authentication is a local foundation only; no backend authentication exists yet.

## Admin routes

The Admin route map is `/login`, `/dashboard`, `/machines`, `/machines/create`, `/machines/:id`, `/machines/:id/edit`, `/bookings`, `/bookings/:id`, `/orders`, `/orders/:id`, `/customers`, `/customers/:id`, `/payments`, `/reports`, and `/settings`. `ProtectedRoute` guards dashboard routes, while `RoleRoute` is available for future role-specific branches. The current local demo session makes the dashboard previewable without a Backend.
