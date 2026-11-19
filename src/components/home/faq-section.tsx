import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/faq/faq";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { buildWhatsAppLink } from "@/config/site";
import { homeFaq } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section className="bg-brand-white py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col items-start gap-8 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            description="Não encontrou sua dúvida? Pergunte direto para quem vai construir o seu site."
          />
          <TrackedLink
            event="whatsapp_click"
            eventParams={{ source: "home-faq" }}
            href={buildWhatsAppLink("Olá! Vim pelo site da Vitrine Digital e tenho uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-medium text-brand-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <span className="h-2 w-2 rounded-full bg-[#25D366]" aria-hidden="true" />
            Tirar dúvida no WhatsApp
          </TrackedLink>
        </div>
        <Faq items={homeFaq} />
      </Container>
    </section>
  );
}
