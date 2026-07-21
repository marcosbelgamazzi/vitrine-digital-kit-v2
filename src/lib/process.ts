export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e público.",
  },
  {
    title: "Planejamento",
    description: "Definimos escopo, prazos e estrutura do projeto.",
  },
  {
    title: "Estrutura e conteúdo",
    description: "Organizamos páginas, textos e hierarquia de informações.",
  },
  {
    title: "Design e desenvolvimento",
    description: "Criamos a interface e construímos o site.",
  },
  {
    title: "Revisão",
    description: "Testamos e ajustamos antes de publicar.",
  },
  {
    title: "Publicação",
    description: "Colocamos o site no ar.",
  },
  {
    title: "Suporte e evolução",
    description: "Acompanhamos e evoluímos o site depois do lançamento.",
  },
];
