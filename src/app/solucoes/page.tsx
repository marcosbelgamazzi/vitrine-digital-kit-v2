import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightGroup } from "@/components/ui/spotlight-group";
import { solutions } from "@/lib/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Soluções",
  description:
    "Encontre a solução certa para o seu momento: colocar sua empresa na internet, modernizar seu site, gerar contatos, divulgar um evento ou criar algo sob medida.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Qual é o seu objetivo agora?"
        description="Organizamos nossa oferta pela necessidade do seu negócio — não apenas pelo tipo de serviço."
      />

      <section className="relative py-20 sm:py-28">
        <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 60} className="h-full">
                <div className="spotlight-card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-sm font-medium tabular-nums text-brand-navy/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue">
                    <solution.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-brand-navy">{solution.title}</h2>
                  <p className="text-sm leading-relaxed text-brand-navy/65">{solution.description}</p>
                </div>
              </Reveal>
            ))}
          </SpotlightGroup>
        </Container>
      </section>

      <CtaBanner
        title="Vamos encontrar o melhor caminho para o seu negócio?"
        description="Fale com a gente e monte um plano de ação a partir do seu objetivo."
        origin="solucoes"
      />
    </>
  );
}
