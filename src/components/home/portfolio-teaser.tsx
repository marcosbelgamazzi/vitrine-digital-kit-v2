import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CaseShowcase } from "@/components/portfolio/case-showcase";

export function PortfolioTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-12 text-brand-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-violet/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-blue/15 blur-[140px]" />
        <div className="bg-noise absolute inset-0" />
      </div>

      <Container className="flex flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Portfólio"
            title="Projetos reais, no ar e funcionando"
            description="Do site de evento com vendas e PIX a plataformas SaaS e aplicativo Android com IA."
          />
          <Button href="/portfolio" variant="light" arrow className="shrink-0">
            Ver portfólio completo
          </Button>
        </div>

        <CaseShowcase />
      </Container>
    </section>
  );
}
