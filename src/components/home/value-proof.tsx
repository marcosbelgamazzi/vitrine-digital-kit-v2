import { Palette, Zap, Target, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Design sob medida",
    description: "Nada de templates genéricos — cada site reflete a identidade do seu negócio.",
    icon: Palette,
  },
  {
    title: "Performance real",
    description: "Sites rápidos, otimizados e construídos com boas práticas técnicas.",
    icon: Zap,
  },
  {
    title: "Foco em conversão",
    description: "Estrutura pensada para transformar visitas em contatos reais.",
    icon: Target,
  },
  {
    title: "Comunicação direta",
    description: "Processo transparente, com contato direto via WhatsApp em cada etapa.",
    icon: MessageCircle,
  },
];

export function ValueProof() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 60}>
              <div className="flex flex-col gap-2">
                <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-brand-navy">{pillar.title}</p>
                <p className="text-sm text-brand-navy/70">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
