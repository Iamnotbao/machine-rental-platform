# Client homepage architecture

The Client homepage is composed at `pages/Home/Home.tsx`. It keeps sections independent so that landing-page content can evolve without turning the route into one large component.

```text
Home page
├── Hero
├── Statistics (Counter)
├── FeaturedMachines (MachineCard)
├── HowItWorks
├── WhyChooseUs
├── AboutCompany
├── Testimonials
├── CTA
└── Newsletter
```

Homepage machine content is held in `features/machines/mock/featuredMachines.ts`. It is presentation-only data; a future machine feature hook and service can replace that source without moving API logic into cards or sections.

## Shared UI

`packages/ui` contains only app-neutral primitives. The homepage uses its `Button`, `Card`, `Badge`, `Container`, `Section`, `IconWrapper`, `Heading`, and `Text` components. Machine-specific cards remain in the Client feature/page layer.

## Animation strategy

`hooks/useIntersectionObserver.ts` provides reusable viewport detection. `components/motion/Reveal.tsx` uses it to apply fade-up, fade-left, and fade-right entry states. The statistics `Counter` begins only after its value enters the viewport. CSS disables visual transitions when a user has enabled `prefers-reduced-motion`; counters immediately render their final value in that mode.
