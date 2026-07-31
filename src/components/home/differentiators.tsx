import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const items = [
  "Atendimento direto com quem constrói o seu site — sem intermediários, do orçamento à publicação",
  "Solução do tamanho do seu negócio: começa simples e ganha novas funcionalidades conforme a necessidade",
  "Projeto pensado para o seu negócio específico, sem pacotes fechados iguais para todo mundo",
  "Processo transparente, com comunicação direta pelo WhatsApp em cada etapa",
];

export function Differentiators() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading eyebrow="Diferenciais" title="O que muda ao trabalhar com a gente" />
        <ul className="flex flex-col gap-4 lg:w-1/2">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <li className="flex items-start gap-3 text-brand-navy/80">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-violet"
                />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
