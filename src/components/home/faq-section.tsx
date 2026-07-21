import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/faq/faq";
import { homeFaq } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading center eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
        <div className="mx-auto w-full max-w-2xl">
          <Faq items={homeFaq} />
        </div>
      </Container>
    </section>
  );
}
