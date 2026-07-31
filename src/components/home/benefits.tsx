import { Smartphone, Search, Sparkles, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    title: "Funciona bem no celular",
    description: "Testado em diferentes tamanhos de tela, do celular ao desktop.",
    icon: Smartphone,
  },
  {
    title: "Feito para aparecer no Google",
    description: "Estrutura técnica pensada desde o início para ser encontrada nos buscadores (SEO técnico).",
    icon: Search,
  },
  {
    title: "Visual que passa confiança",
    description: "Design atual, alinhado à identidade e ao público do seu negócio.",
    icon: Sparkles,
  },
  {
    title: "Você não fica sozinho depois",
    description: "Acompanhamento e evolução contínua do seu site no ar.",
    icon: LifeBuoy,
  },
];

export function Benefits() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          center
          eyebrow="Benefícios"
          title="Por que investir em um site bem feito"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 60}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-brand-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-lg hover:shadow-brand-violet/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                  <benefit.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-brand-navy">{benefit.title}</h3>
                <p className="text-sm text-brand-navy/70">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
