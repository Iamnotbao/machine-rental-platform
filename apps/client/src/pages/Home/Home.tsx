import { FeaturedMachines } from './sections/FeaturedMachines/FeaturedMachines';
import { Hero } from './sections/Hero/Hero';

export function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedMachines />
    </main>
  );
}