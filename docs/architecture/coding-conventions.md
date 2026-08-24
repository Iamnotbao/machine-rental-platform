# Coding conventions

- Use PascalCase for React components and files that export them, camelCase for functions and values, and clear kebab-case CSS module names.
- TypeScript runs in strict mode. Avoid `any`; model error and API data explicitly.
- Pages compose route UI only. Keep business logic in features/hooks and API access in services.
- Use CSS Modules for page and component styling. Reuse `styles/variables.css` tokens; do not create giant CSS files.
- Prefer `@/` aliases over deeply nested relative imports. Use `import type` for type-only imports.
- Keep each folder within its stated responsibility. Put only generic, cross-app code in packages.
- Normalize API errors in the API layer and render a helpful boundary, route error, empty, or loading state as appropriate.
- TanStack Query owns server state. Keep only persistent cross-screen client state in the narrow store modules; use component state for local UI.
