import {
  Building2,
  MousePointerClick,
  Briefcase,
  PartyPopper,
  RefreshCw,
  Settings2,
  Wrench,
  Plug,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "sites-institucionais",
    title: "Sites institucionais",
    description:
      "Presença digital sólida para apresentar sua empresa com credibilidade.",
    icon: Building2,
  },
  {
    slug: "landing-pages",
    title: "Landing pages",
    description:
      "Páginas focadas em conversão para campanhas e ofertas específicas.",
    icon: MousePointerClick,
  },
  {
    slug: "sites-profissionais",
    title: "Sites profissionais e empresariais",
    description:
      "Estrutura completa para negócios que precisam de mais autoridade online.",
    icon: Briefcase,
  },
  {
    slug: "sites-para-eventos",
    title: "Sites para eventos",
    description:
      "Páginas dedicadas para divulgar e centralizar informações do seu evento.",
    icon: PartyPopper,
  },
  {
    slug: "reformulacao",
    title: "Reformulação de sites",
    description:
      "Modernização de sites antigos, lentos ou fora do padrão atual.",
    icon: RefreshCw,
  },
  {
    slug: "sistemas-web-personalizados",
    title: "Sistemas web personalizados",
    description:
      "Soluções sob medida para processos e necessidades específicas do seu negócio.",
    icon: Settings2,
  },
  {
    slug: "manutencao",
    title: "Manutenção",
    description:
      "Atualizações, ajustes e evolução contínua do seu site já no ar.",
    icon: Wrench,
  },
  {
    slug: "integracoes",
    title: "Integrações",
    description:
      "Conexão com WhatsApp, formulários, CRMs e outras ferramentas do seu fluxo.",
    icon: Plug,
  },
  {
    slug: "performance-e-seo-tecnico",
    title: "Performance e SEO técnico",
    description:
      "Sites rápidos e otimizados para os buscadores encontrarem seu negócio.",
    icon: Gauge,
  },
];
