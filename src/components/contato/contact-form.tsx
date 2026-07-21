"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/config/site";
import { track } from "@/lib/analytics";

const inputClasses =
  "w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-violet focus:outline-none";
const labelClasses = "text-sm font-medium text-brand-navy";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      "Olá! Vim pelo site da Vitrine Digital e quero falar com vocês.",
      "",
      `Nome: ${name}`,
      `Mensagem: ${message}`,
    ].join("\n");

    track("contact_submit");
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className={labelClasses}>
          Nome *
        </label>
        <input
          id="contact-name"
          required
          className={inputClasses}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Mensagem *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          className={inputClasses}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue px-6 py-3 text-sm font-medium text-brand-white transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Enviar mensagem pelo WhatsApp
      </button>
    </form>
  );
}
