import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { caseStudies } from "@/lib/portfolio";

const staticPaths = [
  "",
  "/servicos",
  "/solucoes",
  "/portfolio",
  "/como-trabalhamos",
  "/sobre",
  "/orcamento",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));

  const caseRoutes = caseStudies.map((item) => ({
    url: `${siteUrl}/portfolio/${item.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...caseRoutes];
}
