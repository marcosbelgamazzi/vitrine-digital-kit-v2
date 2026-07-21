import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre",
  description:
    "Conheça a Vitrine Digital: sites modernos, rápidos e estratégicos para empresas e profissionais que querem fortalecer sua presença digital.",
  path: "/sobre",
});

const values = [
  {
    title: "Comunicação direta",
    description:
      "Sem burocracia: você fala com quem está de fato trabalhando no seu projeto, pelo WhatsApp.",
  },
  {
    title: "Trabalho sob medida",
    description:
      "Cada site é pensado a partir do seu negócio, não de um template genérico reaproveitado.",
  },
  {
    title: "Atenção aos detalhes técnicos",
    description:
      "Performance, responsividade, SEO técnico e acessibilidade fazem parte do processo, não são um extra.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Tecnologia com presença comercial de verdade"
        description="A Vitrine Digital nasceu para ajudar pequenas e médias empresas, profissionais autônomos e empreendedores a terem uma presença digital que realmente gera resultado."
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <p className="max-w-2xl text-brand-navy/80">
            Acreditamos que um bom site vai além da estética: ele precisa
            comunicar com clareza, carregar rápido, funcionar bem em qualquer
            tela e ajudar o seu negócio a ser encontrado. É esse o padrão que
            buscamos em cada projeto.
          </p>
        </Container>
      </section>

      <section className="bg-brand-white py-16 sm:py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-2">
              <h2 className="font-semibold text-brand-navy">{value.title}</h2>
              <p className="text-sm text-brand-navy/70">{value.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Vamos conversar sobre o seu projeto?"
        description="Conte o que você precisa e veja como podemos ajudar."
        origin="sobre"
      />
    </>
  );
}
