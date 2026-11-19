import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { BudgetForm } from "@/components/orcamento/budget-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Orçamento Inteligente",
  description:
    "Conte sobre o seu projeto e receba um resumo direto no WhatsApp da Vitrine Digital.",
  path: "/orcamento",
});

export default async function OrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ origem?: string }>;
}) {
  const { origem } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Orçamento inteligente"
        title="Vamos entender o seu projeto"
        description="Responda algumas perguntas rápidas e receba um resumo pronto para conversar com a gente pelo WhatsApp."
      />

      <section className="py-12 sm:py-20">
        <Container className="max-w-2xl">
          <BudgetForm origin={origem} />
        </Container>
      </section>
    </>
  );
}
