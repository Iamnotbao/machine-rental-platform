# Setup

## Requirements

Use a current Node.js LTS release and npm with workspace support.

```bash
npm install
npm run dev:client
npm run dev:admin
```

The Client and Admin commands start their independent Vite applications. Copy the matching `.env.example` to a local `.env` when a Backend base URL is available; never commit secrets. Admin opens with a local demo session so the dashboard foundation can be reviewed without a Backend.
