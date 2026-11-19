import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightGroup } from "@/components/ui/spotlight-group";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export const metadata = pageMetadata({
  title: "Serviços",
  description:
    "Conheça os serviços da Vitrine Digital: sites institucionais, landing pages, sistemas web, manutenção, integrações, performance e SEO técnico.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <ViewTracker event="service_view" eventParams={{ page: "list" }} />
      <PageHero
        eyebrow="Serviços"
        title="O que fazemos"
        description="Da criação do primeiro site à evolução contínua do seu projeto digital — cada serviço pensado para gerar resultado real."
      />

      <section className="relative py-12 sm:py-28">
        <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60} className="h-full">
                <div className="spotlight-card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-sm font-medium tabular-nums text-brand-navy/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="text-sm leading-relaxed text-brand-navy/65">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </SpotlightGroup>
        </Container>
      </section>

      <CtaBanner
        title="Não sabe por onde começar?"
        description="Conte seu objetivo no orçamento inteligente e a gente indica o melhor caminho."
        origin="servicos"
      />
    </>
  );
}
