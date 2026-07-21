import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Funciona bem no celular",
    description: "Testado em diferentes tamanhos de tela, do celular ao desktop.",
  },
  {
    title: "Feito para aparecer no Google",
    description: "Estrutura técnica pensada desde o início para ser encontrada nos buscadores (SEO técnico).",
  },
  {
    title: "Visual que passa confiança",
    description: "Design atual, alinhado à identidade e ao público do seu negócio.",
  },
  {
    title: "Você não fica sozinho depois",
    description: "Acompanhamento e evolução contínua do seu site no ar.",
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
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6"
            >
              <h3 className="font-semibold text-brand-navy">{benefit.title}</h3>
              <p className="text-sm text-brand-navy/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
