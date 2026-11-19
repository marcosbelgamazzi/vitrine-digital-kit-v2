import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { footerNav } from "@/lib/nav";
import { services } from "@/lib/services";
import { TrackedLink } from "@/components/analytics/tracked-link";

const linkClass =
  "text-sm text-brand-white/60 transition-colors duration-200 hover:text-brand-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-brand-navy text-brand-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-brand-violet/15 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
      </div>

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <Logo tone="dark" size="md" />
          <p className="max-w-xs text-sm leading-relaxed text-brand-white/60">
            {siteConfig.description}
          </p>
          <TrackedLink
            event="whatsapp_click"
            eventParams={{ source: "footer-cta" }}
            href={buildWhatsAppLink(
              "Olá! Vim pelo site e quero saber mais sobre a Vitrine Digital.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-brand-white/15 bg-brand-white/5 px-4 py-2 text-sm font-medium transition-colors hover:border-brand-white/30 hover:bg-brand-white/10"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
            </span>
            Conversar agora no WhatsApp
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </TrackedLink>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-white/40">
            Navegação
          </span>
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-white/40">
            Serviços
          </span>
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href="/servicos" className={linkClass}>
              {service.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-white/40">
            Contato
          </span>
          <TrackedLink
            event="whatsapp_click"
            eventParams={{ source: "footer" }}
            href={buildWhatsAppLink(
              "Olá! Vim pelo site e quero saber mais sobre a Vitrine Digital.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WhatsApp: {siteConfig.whatsapp.display}
          </TrackedLink>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            {siteConfig.email}
          </a>
          <Link href="/orcamento?origem=footer" className={`${linkClass} font-medium text-brand-white`}>
            Pedir um orçamento →
          </Link>
        </div>
      </Container>

      <Container aria-hidden="true" className="select-none overflow-hidden">
        <p className="text-gradient whitespace-nowrap pb-2 text-[13vw] font-semibold leading-none tracking-tighter opacity-20 lg:text-[9.5rem]">
          Vitrine Digital
        </p>
      </Container>

      <div className="border-t border-brand-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-brand-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.slogan}</p>
        </Container>
      </div>
    </footer>
  );
}
