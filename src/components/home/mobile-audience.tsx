import Image from "next/image";
import { MessageCircle, Search, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Smartphone,
    title: "Pensado primeiro para o celular",
    description: "Leitura confortável, botões fáceis de tocar e carregamento rápido.",
  },
  {
    icon: MessageCircle,
    title: "Contato em um toque",
    description: "O cliente chama você no WhatsApp direto da página, sem formulário longo.",
  },
  {
    icon: Search,
    title: "Encontrado no Google",
    description: "Estrutura técnica para o seu negócio aparecer quando procuram por ele.",
  },
];

/**
 * Seção com imagem ilustrativa de pessoas usando o celular — representa o
 * público final dos sites (não são clientes nem equipe da Vitrine Digital).
 */
export function MobileAudience() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow="Seu cliente está no celular"
            title="É pelo celular que seus clientes vão encontrar você"
            description="Hoje, muita gente pesquisa, compara e entra em contato direto pelo celular. Seu site precisa estar pronto para esse momento."
          />
          <ul className="flex flex-col gap-5">
            {points.map((point, index) => (
              <li key={point.title}>
                <Reveal delay={index * 80} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-blue text-brand-white shadow-lg shadow-brand-violet/25">
                    <point.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-semibold text-brand-navy">{point.title}</span>
                    <span className="text-sm leading-relaxed text-brand-navy/65">{point.description}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Button href="/orcamento?origem=home-celular" arrow>
            Quero um site assim
          </Button>
        </div>

        <Reveal>
          <div className="relative mx-auto max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-x-[6%] bottom-0 top-[12%] rounded-[3rem] bg-gradient-to-br from-brand-violet via-brand-blue to-brand-navy shadow-2xl shadow-brand-violet/30"
            >
              <div className="bg-grid absolute inset-0 rounded-[3rem]" />
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-coral/40 blur-3xl" />
            </div>
            <Image
              src="/images/ilustracoes/pessoas-celular.webp"
              alt="Ilustração de duas pessoas sorrindo enquanto navegam em sites pelo celular"
              width={1200}
              height={973}
              sizes="(min-width: 1024px) 560px, 92vw"
              className="relative w-full"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-[52%] flex animate-float sm:top-[30%] items-center gap-2 rounded-2xl border border-brand-navy/10 bg-white/95 px-3 py-2 text-xs font-medium text-brand-navy shadow-xl backdrop-blur sm:-left-6 sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              Nova mensagem no WhatsApp
            </span>
            <span
              aria-hidden="true"
              style={{ animationDelay: "-3s" }}
              className="absolute bottom-[14%] right-0 flex animate-float items-center gap-2 rounded-2xl border border-brand-navy/10 bg-white/95 px-3 py-2 text-xs font-medium text-brand-navy shadow-xl backdrop-blur sm:-right-6 sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-white">
                <Search className="h-4 w-4" />
              </span>
              Encontrou você no Google
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
