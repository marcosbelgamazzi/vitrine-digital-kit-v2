import Image from "next/image";
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
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="min-w-0">
            <BudgetForm origin={origem} />
          </div>
          <aside className="hidden flex-col gap-6 lg:sticky lg:top-28 lg:flex lg:self-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-[2%] bottom-0 top-[16%] rounded-[2rem] bg-gradient-to-br from-brand-violet via-brand-blue to-brand-navy shadow-xl shadow-brand-violet/25"
              />
              <Image
                src="/images/ilustracoes/orcamento-tablet.webp"
                alt="Ilustração de um dono de padaria preenchendo o orçamento da Vitrine Digital no tablet"
                width={1200}
                height={800}
                sizes="420px"
                className="relative w-full"
              />
            </div>
            <ol className="flex flex-col gap-4">
              {[
                ["Responda poucas perguntas", "Leva poucos minutos, sem cadastro."],
                ["Receba o resumo pronto", "Tudo organizado em uma mensagem."],
                ["Converse pelo WhatsApp", "Direto com quem vai construir o seu site."],
              ].map(([title, text], index) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet to-brand-blue text-sm font-semibold text-brand-white">
                    {index + 1}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-brand-navy">{title}</span>
                    <span className="text-sm text-brand-navy/60">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>
    </>
  );
}
