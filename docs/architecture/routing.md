# Client routing

The implemented Client route foundation is:

| Route | Purpose |
| --- | --- |
| `/` | Customer landing page |
| `/machines` | Machine catalog |
| `/machines/:id` | Machine detail |
| `/machines/:id/booking` | Legacy booking entry |
| `/booking` | Query-based booking review |
| `/purchase` | Purchase confirmation and billing selection |
| `/checkout` | Mock payment method selection |
| `/payment/success` | Mock successful payment result |
| `/payment/failed` | Mock failed payment result and retry |
| `/payments/history` | Mock payment history |
| `/billing` | Mock billing profile editor |
| `/cart` | Customer cart |
| `/orders` | Customer orders |
| `/orders/:id` | Order detail |
| `/profile` | Customer profile |
| `/login` | Sign in |
| `/register` | Registration |

The current payment flow is UI-first. Booking, purchase, checkout, billing, and payment-history screens intentionally use mock data and are directly previewable while the Backend is still absent. Customer account/order routes remain behind `ProtectedRoute`.

The payment feature keeps mock data and a service seam under `features/payments` so future Backend integration can replace mock service behavior without embedding API requests in pages.

## Admin routes

The Admin route map is `/login`, `/dashboard`, `/machines`, `/machines/create`, `/machines/:id`, `/machines/:id/edit`, `/bookings`, `/bookings/:id`, `/orders`, `/orders/:id`, `/customers`, `/customers/:id`, `/payments`, `/reports`, and `/settings`. `ProtectedRoute` guards dashboard routes, while `RoleRoute` is available for future role-specific branches. The current local demo session makes the dashboard previewable without a Backend.
