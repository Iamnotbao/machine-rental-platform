# Client homepage architecture

The Client homepage is composed at `pages/Home/Home.tsx`. Landing-page content remains split into independent sections so it can evolve without turning the route into one large component.

The global customer shell now renders an `AnnouncementBanner` above the sticky header. Its active messages come from `features/announcements` through `mock data -> service -> TanStack Query hook -> banner`, which is the seam for the future Admin/Backend announcement API. The ticker pauses while hovered or focused and respects reduced-motion preferences.

The header uses a left-side hamburger navigation drawer on desktop and mobile. The drawer owns primary navigation links while account/login and the rent action remain available from the header.

Homepage content includes the hero, featured providers/machines, introduction content, and the blog/news carousel. Blog data follows `mock data -> service -> hook -> page/component`, including category filtering, pagination, article detail, and related articles.

## Shared UI

`packages/ui` contains only app-neutral primitives. Domain-specific machine, blog, payment, account, and announcement presentation stays in Client feature/page layers.

## Animation strategy

`hooks/useIntersectionObserver.ts` and `components/motion/Reveal.tsx` provide viewport entry motion. Carousel/ticker animation pauses on user interaction and CSS disables continuous motion when `prefers-reduced-motion` is enabled.
