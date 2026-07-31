import {
  Search,
  ClipboardList,
  FileText,
  PenTool,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e público.",
    icon: Search,
  },
  {
    title: "Planejamento",
    description: "Definimos escopo, prazos e estrutura do projeto.",
    icon: ClipboardList,
  },
  {
    title: "Estrutura e conteúdo",
    description: "Organizamos páginas, textos e hierarquia de informações.",
    icon: FileText,
  },
  {
    title: "Design e desenvolvimento",
    description: "Criamos a interface e construímos o site.",
    icon: PenTool,
  },
  {
    title: "Revisão",
    description: "Testamos e ajustamos antes de publicar.",
    icon: CheckCircle2,
  },
  {
    title: "Publicação",
    description: "Colocamos o site no ar.",
    icon: Rocket,
  },
  {
    title: "Suporte e evolução",
    description: "Acompanhamos e evoluímos o site depois do lançamento.",
    icon: LifeBuoy,
  },
];
