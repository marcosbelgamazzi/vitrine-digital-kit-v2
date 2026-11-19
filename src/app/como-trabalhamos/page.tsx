import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Como Trabalhamos",
  description:
    "Conheça o processo da Vitrine Digital: descoberta, planejamento, estrutura e conteúdo, design e desenvolvimento, revisão, publicação, suporte e evolução.",
  path: "/como-trabalhamos",
});

export default function ComoTrabalhamosPage() {
  return (
    <>
      <PageHero
        eyebrow="Como trabalhamos"
        title="Um processo claro, do início ao fim"
        description="Cada projeto segue as mesmas etapas — com transparência sobre o que está acontecendo em cada uma delas."
      />

      <section className="py-12 sm:py-20">
        <Container>
          <ol className="flex flex-col gap-10">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 60}>
                <li className="group flex gap-6">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet to-brand-blue text-brand-white transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-white text-[10px] font-semibold text-brand-navy shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div className="flex flex-col gap-1 pt-1.5">
                    <h2 className="font-semibold text-brand-navy">{step.title}</h2>
                    <p className="text-sm text-brand-navy/70">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner
        title="Vamos começar o seu projeto?"
        description="Preencha o orçamento inteligente e dê o primeiro passo da descoberta."
        origin="como-trabalhamos"
      />
    </>
  );
}
