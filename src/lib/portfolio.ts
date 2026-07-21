export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  cover: string;
  gallery: string[];
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: string[];
  url?: string;
};

/**
 * Nenhum case real foi fornecido ainda — ver docs/PENDENCIAS.md.
 * Não inventar clientes, depoimentos ou resultados. Preencher apenas com
 * projetos reais da Vitrine Digital assim que estiverem disponíveis.
 */
export const caseStudies: CaseStudy[] = [];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
