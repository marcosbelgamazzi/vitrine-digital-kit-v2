import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/faq/faq";
import { ContactForm } from "@/components/contato/contact-form";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { homeFaq } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";
import { TrackedLink } from "@/components/analytics/tracked-link";

export const metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a Vitrine Digital pelo WhatsApp ou envie sua mensagem pelo formulário de contato.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Fale diretamente com a gente pelo WhatsApp ou envie sua mensagem abaixo."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-semibold text-brand-navy">WhatsApp</h2>
            </div>
            <TrackedLink
              event="whatsapp_click"
              eventParams={{ source: "contato-page" }}
              href={buildWhatsAppLink(
                "Olá! Vim pelo site e quero falar com vocês.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-violet underline underline-offset-4"
            >
              {siteConfig.whatsapp.display}
            </TrackedLink>
            <p className="text-sm text-brand-navy/70">
              Nosso canal principal de contato — respostas mais rápidas por
              aqui.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-semibold text-brand-navy">E-mail</h2>
            </div>
            <TrackedLink
              event="cta_click"
              eventParams={{ source: "contato-page", type: "email" }}
              href={`mailto:${siteConfig.email}`}
              className="text-brand-violet underline underline-offset-4"
            >
              {siteConfig.email}
            </TrackedLink>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="bg-brand-white py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading center eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
          <div className="mx-auto w-full max-w-2xl">
            <Faq items={homeFaq} />
          </div>
        </Container>
      </section>
    </>
  );
}
