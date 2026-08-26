# Client homepage architecture

The Client homepage is composed at `pages/Home/Home.tsx` and currently contains `Hero`, `FeaturedMachines`, `AboutPreview`, and `BlogCarousel` sections.

`AboutPreview` introduces the product and links to the dedicated `/about` page. `BlogCarousel` consumes the blog feature hook, shows three cards per logical page on desktop, supports previous/next controls and numbered pages, auto-advances every 4.5 seconds, and pauses while hovered or keyboard-focused.

Blog data is UI-first under `features/blogs/data`, accessed through `blog-ui.service.ts` and TanStack Query hooks. News listing and blog-detail pages therefore do not depend directly on mock arrays and can later switch to Backend APIs through the service boundary.

The homepage machine/provider section continues to use machine mock data until the machine backend is connected.
