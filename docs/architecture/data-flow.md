# Data flow

The intended client request flow is:

```text
Page -> Feature -> Hook -> Service -> API Client -> Backend
```

Pages arrange a route's presentation. Features and hooks keep domain behavior out of pages. Services own endpoint-specific requests and call the common API client, which owns base URL, headers, timeout, response handling, and normalized errors.

For server state, the intended flow is:

```text
Backend API -> TanStack Query -> Feature Hook -> Component
```

Components must not call APIs directly. This keeps loading, caching, error handling, and future API changes consistent. The Phase 1A API services are foundations only and are not invoked by the sample pages because no Backend exists.
