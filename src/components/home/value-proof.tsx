import { Container } from "@/components/ui/container";

const pillars = [
  {
    title: "Design sob medida",
    description: "Nada de templates genéricos — cada site reflete a identidade do seu negócio.",
  },
  {
    title: "Performance real",
    description: "Sites rápidos, otimizados e construídos com boas práticas técnicas.",
  },
  {
    title: "Foco em conversão",
    description: "Estrutura pensada para transformar visitas em contatos reais.",
  },
  {
    title: "Comunicação direta",
    description: "Processo transparente, com contato direto via WhatsApp em cada etapa.",
  },
];

export function ValueProof() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-2">
              <p className="font-semibold text-brand-navy">{pillar.title}</p>
              <p className="text-sm text-brand-navy/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
