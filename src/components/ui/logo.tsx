import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Placeholder tipográfico do monograma VD. Nenhum asset oficial de logo foi
 * fornecido — ver docs/PENDENCIAS.md. Substituir pelo SVG oficial assim que
 * disponível, sem redesenhar a marca definitiva aqui.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-semibold tracking-tight ${className}`}
      aria-label={siteConfig.name}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-violet to-brand-blue text-sm font-bold text-brand-white">
        VD
      </span>
      <span className="text-base">{siteConfig.name}</span>
    </Link>
  );
}
