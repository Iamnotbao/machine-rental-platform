import { AboutPreview } from './sections/AboutPreview/AboutPreview';
import { BlogCarousel } from './sections/BlogCarousel/BlogCarousel';
import { FeaturedMachines } from './sections/FeaturedMachines/FeaturedMachines';
import { Hero } from './sections/Hero/Hero';

export function HomePage() { return <main><Hero/><FeaturedMachines/><AboutPreview/><BlogCarousel/></main>; }
