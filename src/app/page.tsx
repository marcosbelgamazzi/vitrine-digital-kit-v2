import { Hero } from "@/components/home/hero";
import { CapabilitiesMarquee } from "@/components/home/capabilities-marquee";
import { Bento } from "@/components/home/bento";
import { Problems } from "@/components/home/problems";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { SolutionsTeaser } from "@/components/home/solutions-teaser";
import { PortfolioTeaser } from "@/components/home/portfolio-teaser";
import { ProcessTeaser } from "@/components/home/process-teaser";
import { Differentiators } from "@/components/home/differentiators";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitiesMarquee />
      <Bento />
      <Problems />
      <ServicesTeaser />
      <SolutionsTeaser />
      <PortfolioTeaser />
      <ProcessTeaser />
      <Differentiators />
      <FaqSection />
      <FinalCta />
    </>
  );
}
