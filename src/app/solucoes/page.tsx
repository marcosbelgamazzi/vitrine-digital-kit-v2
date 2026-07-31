import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 60}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-brand-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                    <solution.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-semibold text-brand-navy">{solution.title}</h2>
                  <p className="text-sm text-brand-navy/70">{solution.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
