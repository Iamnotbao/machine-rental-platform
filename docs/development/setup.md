# Setup

## Requirements

Use a current Node.js LTS release and npm with workspace support.

```bash
npm install
npm run dev:client
```

The Client command starts Vite for `apps/client`. Admin development is planned for Phase 1B, so no Admin command exists yet. Copy `apps/client/.env.example` to a local `.env` when a Backend base URL is available; never commit secrets.
