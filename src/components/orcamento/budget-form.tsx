"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/config/site";
import { track } from "@/lib/analytics";
import {
  budgetOptions,
  featureOptions,
  getOriginLabel,
  projectTypeOptions,
  timelineOptions,
} from "@/lib/budget";

const inputClasses =
  "w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-violet focus:outline-none";
const labelClasses = "text-sm font-medium text-brand-navy";

function buildSummaryMessage(data: {
  originLabel?: string;
  name: string;
  company: string;
  segment: string;
  projectType: string;
  hasSite: "sim" | "nao";
  siteUrl: string;
  objective: string;
  features: string[];
  timeline: string;
  budget: string;
  notes: string;
}) {
  const lines = ["Olá! Vim pelo site e quero um orçamento.", ""];

  if (data.originLabel) lines.push(`Origem: ${data.originLabel}`);
  lines.push(`Nome: ${data.name}`);
  if (data.company) lines.push(`Empresa: ${data.company}`);
  if (data.segment) lines.push(`Segmento: ${data.segment}`);
  lines.push(`Tipo de projeto: ${data.projectType}`);
  lines.push(
    `Já tem site: ${data.hasSite === "sim" ? `Sim (${data.siteUrl || "sem URL informada"})` : "Não"}`,
  );
  lines.push(`Objetivo: ${data.objective}`);
  if (data.features.length > 0) {
    lines.push(`Funcionalidades desejadas: ${data.features.join(", ")}`);
  }
  if (data.timeline) lines.push(`Prazo desejado: ${data.timeline}`);
  if (data.budget) lines.push(`Investimento estimado: ${data.budget}`);
  if (data.notes) lines.push(`Observações: ${data.notes}`);

  return lines.join("\n");
}

export function BudgetForm({ origin }: { origin?: string }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("");
  const [projectType, setProjectType] = useState("");
  const [hasSite, setHasSite] = useState<"sim" | "nao">("nao");
  const [siteUrl, setSiteUrl] = useState("");
  const [objective, setObjective] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [started, setStarted] = useState(false);

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("budget_start", { origin });
  }

  function toggleFeature(feature: string) {
    markStarted();
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = buildSummaryMessage({
      originLabel: getOriginLabel(origin),
      name,
      company,
      segment,
      projectType,
      hasSite,
      siteUrl,
      objective,
      features,
      timeline,
      budget,
      notes,
    });

    track("budget_complete", { origin });
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Nome *
          </label>
          <input
            id="name"
            required
            className={inputClasses}
            value={name}
            onChange={(e) => {
              markStarted();
              setName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClasses}>
            Empresa
          </label>
          <input
            id="company"
            className={inputClasses}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="segment" className={labelClasses}>
            Segmento de atuação
          </label>
          <input
            id="segment"
            placeholder="Ex: moda, saúde, serviços..."
            className={inputClasses}
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className={labelClasses}>
            Tipo de projeto *
          </label>
          <select
            id="projectType"
            required
            className={inputClasses}
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className={labelClasses}>Você já tem um site?</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-brand-navy/80">
            <input
              type="radio"
              name="hasSite"
              checked={hasSite === "nao"}
              onChange={() => setHasSite("nao")}
            />
            Não
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-navy/80">
            <input
              type="radio"
              name="hasSite"
              checked={hasSite === "sim"}
              onChange={() => setHasSite("sim")}
            />
            Sim
          </label>
        </div>
        {hasSite === "sim" && (
          <input
            type="url"
            placeholder="URL do site atual"
            className={inputClasses}
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
          />
        )}
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="objective" className={labelClasses}>
          Qual é o principal objetivo do site? *
        </label>
        <textarea
          id="objective"
          required
          rows={3}
          className={inputClasses}
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        />
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className={labelClasses}>Funcionalidades desejadas</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {featureOptions.map((feature) => (
            <label
              key={feature}
              className="flex items-center gap-2 text-sm text-brand-navy/80"
            >
              <input
                type="checkbox"
                checked={features.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />
              {feature}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className={labelClasses}>
            Prazo desejado
          </label>
          <select
            id="timeline"
            className={inputClasses}
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option value="">Selecione uma opção</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={labelClasses}>
            Investimento previsto
          </label>
          <select
            id="budget"
            className={inputClasses}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Prefiro não informar</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className={labelClasses}>
          Observações
        </label>
        <textarea
          id="notes"
          rows={3}
          className={inputClasses}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue px-6 py-3 text-sm font-medium text-brand-white transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Enviar resumo pelo WhatsApp
      </button>
    </form>
  );
}
