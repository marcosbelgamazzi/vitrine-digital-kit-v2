import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Ícones 192x192 e 512x512 dependem dos assets oficiais do logo — ver
 * docs/PENDENCIAS.md. Usando o favicon padrão enquanto isso.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F3F4F8",
    theme_color: "#0D1124",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
