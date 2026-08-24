import { AboutCompany } from './sections/AboutCompany/AboutCompany';
import { CallToAction } from './sections/CTA/CTA';
import { FeaturedMachines } from './sections/FeaturedMachines/FeaturedMachines';
import { Hero } from './sections/Hero/Hero';
import { HowItWorks } from './sections/HowItWorks/HowItWorks';
import { Newsletter } from './sections/Newsletter/Newsletter';
import { Statistics } from './sections/Statistics/Statistics';
import { Testimonials } from './sections/Testimonials/Testimonials';
import { WhyChooseUs } from './sections/WhyChooseUs/WhyChooseUs';
import styles from './Home.module.css';

export function HomePage() {
  return (
    <div className={styles.home}>
      <Hero />
      <Statistics />
      <FeaturedMachines />
      <HowItWorks />
      <WhyChooseUs />
      <AboutCompany />
      <Testimonials />
      <CallToAction />
      <Newsletter />
    </div>
  );
}
