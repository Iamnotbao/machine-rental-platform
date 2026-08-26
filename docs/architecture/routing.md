# Client routing

The implemented Client route foundation is:

| Route | Purpose |
| --- | --- |
| `/` | Customer landing page |
| `/machines` | Machine catalog |
| `/machines/:id` | Machine detail |
| `/machines/:id/booking` | Protected legacy booking entry |
| `/booking` | Protected query-based booking review |
| `/purchase` | Protected purchase confirmation and billing selection |
| `/checkout` | Protected mock payment method selection |
| `/payment/success` | Protected mock successful payment result |
| `/payment/failed` | Protected mock failed payment result and retry |
| `/payments/history` | Protected mock payment history |
| `/billing` | Protected mock billing profile editor |
| `/cart` | Customer cart |
| `/orders` | Customer orders |
| `/orders/:id` | Order detail |
| `/profile` | Customer profile |
| `/login` | Sign in |
| `/register` | Registration |

Browsing machines remains public. Starting a rental or entering purchase, checkout, billing, payment result/history, cart, order, or profile screens requires an authenticated customer session through `ProtectedRoute`.

Authentication is UI-first while the Backend is absent. The current mock credential is `admin` / `admin`; the mock auth service is isolated under `features/auth` and the session is persisted locally so the service can later be replaced by the real authentication API.

Payment methods are also mock-driven. Method metadata, including image URLs, lives under `features/payments/data`, while checkout renders radio-button selection cards. This keeps payment presentation separate from the future Backend/payment-gateway integration.

## Admin routes

The Admin route map is `/login`, `/dashboard`, `/machines`, `/machines/create`, `/machines/:id`, `/machines/:id/edit`, `/bookings`, `/bookings/:id`, `/orders`, `/orders/:id`, `/customers`, `/customers/:id`, `/payments`, `/reports`, and `/settings`. `ProtectedRoute` guards dashboard routes, while `RoleRoute` is available for future role-specific branches. The current local demo session makes the dashboard previewable without a Backend.
