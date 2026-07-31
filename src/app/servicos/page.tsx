import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-brand-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-semibold text-brand-navy">{service.title}</h2>
                  <p className="text-sm text-brand-navy/70">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
