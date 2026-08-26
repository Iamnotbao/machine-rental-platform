# Client routing

Public content routes are `/`, `/about`, `/news`, `/news/:slug`, `/contact`, `/machines`, and machine detail/provider routes. News and contact are UI-first and consume feature services so their mock sources can later be replaced by Backend endpoints.

Protected customer flow routes include booking, purchase, checkout, payment result/history, billing, cart, orders, and `/profile`. The profile screen contains information, wallet, transaction history, top-up history, and notifications using the account feature mock service.

Authentication remains mock-driven with credential `admin` / `admin`. Starting a rental redirects an unauthenticated visitor to login and then returns them to the requested rental URL.

Payment methods remain mock-driven with radio-card selection and image metadata under `features/payments/data`.
