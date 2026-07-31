import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { solutions } from "@/lib/solutions";

export function SolutionsTeaser() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Soluções"
            title="Qual é o seu objetivo agora?"
            description="Não sabe qual serviço escolher? Comece pelo objetivo do seu negócio — a gente indica o caminho certo."
          />
          <Button href="/solucoes" variant="secondary" className="shrink-0">
            Ver todas as soluções
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 60}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-brand-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                  <solution.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-brand-navy">{solution.title}</h3>
                <p className="text-sm text-brand-navy/70">{solution.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
