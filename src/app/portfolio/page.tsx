import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { CaseShowcase } from "@/components/portfolio/case-showcase";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export const metadata = pageMetadata({
  title: "Portfólio",
  description: "Projetos reais desenvolvidos pela Vitrine Digital.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <ViewTracker event="portfolio_view" eventParams={{ page: "list" }} />
      <PageHero
        eyebrow="Portfólio"
        title="Projetos reais da Vitrine Digital"
        description="Cases desenvolvidos com estratégia, design e tecnologia — todos no ar e funcionando."
      />

      <section className="relative isolate overflow-hidden bg-brand-navy pb-24 pt-8 text-brand-white sm:pb-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-violet/20 blur-[140px]" />
          <div className="absolute -right-40 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-blue/15 blur-[140px]" />
        </div>
        <Container className="flex flex-col gap-14 sm:gap-32">
          <CaseShowcase origin="portfolio" />
        </Container>
      </section>

      <CtaBanner
        title="Quer que seu projeto seja o próximo case?"
        description="Conte sobre o seu negócio e vamos construir algo com resultado real."
        origin="portfolio"
      />
    </>
  );
}
