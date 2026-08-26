# Booking flow

The Client currently implements a UI-first rental and payment prototype using mock data only:

```text
Machine selection
  -> /booking
  -> /purchase
  -> /checkout
  -> /payment/success | /payment/failed
  -> /payments/history
```

The booking query keeps `configId`, `quantity`, `days`, and `provider` together so the provider context is not lost between screens. Purchase adds a mock `billingId` and `purchaseId` before checkout.

Billing profiles and payment history live under `apps/client/src/features/payments/data/payment.mock.ts`. UI-facing async behavior is isolated behind `apps/client/src/features/payments/services/payment-ui.service.ts`. When the Backend is implemented, replace the mock service implementation with API calls instead of moving network access into pages.

The initial booking status foundation remains:

- `PENDING`
- `CONFIRMED`
- `ACTIVE`
- `COMPLETED`
- `CANCELLED`

Payment success/failure buttons are explicitly test controls. They do not execute a real payment or create a real backend order.
