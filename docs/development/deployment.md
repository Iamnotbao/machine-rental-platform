# Deployment

Deployment targets are planned, not active deployments:

- **Client:** Vercel, Netlify, or GitHub Pages.
- **Admin:** Vercel or Netlify; the Phase 1B application has an independent production build.
- **Backend:** separate infrastructure.

Each application remains independently buildable and deployable. Production output is created with `npm run build:client` or `npm run build:admin`.
