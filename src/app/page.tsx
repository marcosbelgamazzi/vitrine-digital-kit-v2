import { Hero } from "@/components/home/hero";
import { ValueProof } from "@/components/home/value-proof";
import { TechAuthority } from "@/components/home/tech-authority";
import { Problems } from "@/components/home/problems";
import { Solution } from "@/components/home/solution";
import { Benefits } from "@/components/home/benefits";
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
      <ValueProof />
      <TechAuthority />
      <Problems />
      <Solution />
      <Benefits />
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
