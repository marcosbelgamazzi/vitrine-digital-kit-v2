type EventName =
  | "whatsapp_click"
  | "budget_start"
  | "budget_complete"
  | "portfolio_view"
  | "service_view"
  | "contact_submit"
  | "cta_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia um evento para GA4 (via gtag) e/ou GTM (via dataLayer), quando os
 * scripts estiverem carregados. Os scripts só são injetados quando há um ID
 * real configurado em variável de ambiente (ver src/components/analytics) —
 * sem eles, esta função não tem efeito externo.
 */
export function track(event: EventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  if (window.dataLayer) {
    window.dataLayer.push({ event, ...params });
  }
}
