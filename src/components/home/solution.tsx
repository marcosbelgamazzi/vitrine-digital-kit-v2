import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Solution() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="A solução"
          center
          title="Sites estratégicos, do jeito certo desde o início"
          description="A Vitrine Digital une design, tecnologia e estratégia para transformar seu site em um ativo real do seu negócio — não apenas um cartão de visitas online."
        />
      </Container>
    </section>
  );
}
