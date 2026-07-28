import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/faq/faq";
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
    <section className="bg-brand-white py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container className="flex flex-col gap-10">
        <SectionHeading center eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
        <div className="mx-auto w-full max-w-2xl">
          <Faq items={homeFaq} />
        </div>
      </Container>
    </section>
  );
}
