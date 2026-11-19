import Link from "next/link";
import { ArrowUpRight, ClipboardList, LayoutGrid, MessageCircle, Route } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { buildWhatsAppLink } from "@/config/site";

const cardClass =
  "group flex h-full flex-col items-start gap-3 rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-xl shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-2xl hover:shadow-brand-violet/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:flex-row sm:gap-4 sm:p-6";

function CardBody({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof ClipboardList;
  title: string;
  description: string;
}) {
  return (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue group-hover:text-brand-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex w-full flex-1 flex-col gap-1">
        <span className="flex items-start justify-between gap-2 text-sm font-semibold text-brand-navy sm:text-base">
          {title}
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-brand-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-violet"
          />
        </span>
        <span className="hidden text-sm leading-relaxed text-brand-navy/60 sm:block">{description}</span>
      </span>
    </>
  );
}

/** Atalhos para as ações mais comuns, sobrepostos à borda inferior do Hero. */
export function QuickActions() {
  return (
    <section aria-label="Atalhos" className="relative z-10 -mt-14 pb-4 sm:-mt-16">
      <Container>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <li>
            <Link href="/orcamento?origem=home-atalho" className={cardClass}>
              <CardBody
                icon={ClipboardList}
                title="Pedir orçamento"
                description="Responda poucas perguntas e receba um caminho claro."
              />
            </Link>
          </li>
          <li>
            <TrackedLink
              event="whatsapp_click"
              eventParams={{ source: "home-atalho" }}
              href={buildWhatsAppLink("Olá! Vim pelo site da Vitrine Digital e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <CardBody
                icon={MessageCircle}
                title="Falar no WhatsApp"
                description="Direto com quem vai construir o seu site."
              />
            </TrackedLink>
          </li>
          <li>
            <Link href="/portfolio" className={cardClass}>
              <CardBody
                icon={LayoutGrid}
                title="Ver projetos"
                description="Sites, plataformas e app reais, no ar."
              />
            </Link>
          </li>
          <li>
            <Link href="/como-trabalhamos" className={cardClass}>
              <CardBody
                icon={Route}
                title="Como trabalhamos"
                description="Atendimento 100% online, em qualquer cidade do Brasil."
              />
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
