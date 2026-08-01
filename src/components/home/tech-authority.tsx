import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

const stats = [
  { value: "88/100", label: "Performance no Google Lighthouse" },
  { value: "1.3s", label: "Carregamento (LCP)" },
  { value: "0", label: "Instabilidade visual (CLS)" },
];

export function TechAuthority() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Como construímos"
          title="Performance não é promessa, é o que este site entrega"
          description="Os números abaixo são medidos no próprio vittrinedigital.com.br, com as mesmas tecnologias e práticas que aplicamos nos projetos dos clientes."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 60}>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-semibold text-brand-violet">
                  {stat.value}
                </span>
                <span className="text-sm text-brand-navy/70">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-brand-navy/70">
            Tecnologias que usamos
          </span>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-brand-navy/10 px-3 py-1 text-xs text-brand-navy/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-brand-navy/50">
          Medido via Google Lighthouse (mobile) em jul/2026.
        </p>
      </Container>
    </section>
  );
}
