import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { footerNav } from "@/lib/nav";
import { TrackedLink } from "@/components/analytics/tracked-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-brand-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Logo tone="dark" />
          <p className="max-w-xs text-sm text-brand-white/70">
            {siteConfig.slogan}
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-2">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-white/70 transition-colors hover:text-brand-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-brand-white/90">
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
            className="text-sm text-brand-white/70 transition-colors hover:text-brand-white"
          >
            WhatsApp: {siteConfig.whatsapp.display}
          </TrackedLink>
        </div>
      </Container>

      <div className="border-t border-brand-white/10 py-6">
        <Container>
          <p className="text-xs text-brand-white/50">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
