import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
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
            {solutions.map((solution) => (
              <div
                key={solution.slug}
                className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6"
              >
                <h2 className="font-semibold text-brand-navy">{solution.title}</h2>
                <p className="text-sm text-brand-navy/70">{solution.description}</p>
              </div>
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
