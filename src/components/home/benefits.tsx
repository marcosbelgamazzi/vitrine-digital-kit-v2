import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Mobile-first de verdade",
    description: "Testado em diferentes tamanhos de tela, do celular ao desktop.",
  },
  {
    title: "SEO técnico desde a fundação",
    description: "Estrutura pensada para ser encontrada nos buscadores.",
  },
  {
    title: "Design moderno",
    description: "Visual atual, alinhado à identidade e ao público do seu negócio.",
  },
  {
    title: "Suporte após a publicação",
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
