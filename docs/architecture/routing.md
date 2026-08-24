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
