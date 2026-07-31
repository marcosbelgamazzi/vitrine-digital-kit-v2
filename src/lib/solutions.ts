import {
  Globe,
  RefreshCw,
  TrendingUp,
  Megaphone,
  CalendarDays,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    slug: "colocar-minha-empresa-na-internet",
    title: "Colocar minha empresa na internet",
    description:
      "Você ainda não tem site e quer começar com uma presença digital profissional.",
    icon: Globe,
  },
  {
    slug: "modernizar-meu-site",
    title: "Modernizar meu site",
    description:
      "Seu site atual está antigo, lento ou não representa mais o seu negócio.",
    icon: RefreshCw,
  },
  {
    slug: "gerar-contatos-e-oportunidades",
    title: "Gerar contatos e oportunidades",
    description:
      "Você quer que o site trabalhe ativamente trazendo novos contatos.",
    icon: TrendingUp,
  },
  {
    slug: "criar-pagina-para-campanha",
    title: "Criar uma página para campanha",
    description:
      "Precisa de uma landing page focada para uma ação ou oferta específica.",
    icon: Megaphone,
  },
  {
    slug: "divulgar-um-evento",
    title: "Divulgar um evento",
    description:
      "Quer centralizar informações e inscrições de um evento em uma página própria.",
    icon: CalendarDays,
  },
  {
    slug: "desenvolver-uma-solucao-personalizada",
    title: "Desenvolver uma solução personalizada",
    description:
      "Seu projeto tem necessidades específicas que fogem do site tradicional.",
    icon: Puzzle,
  },
];
