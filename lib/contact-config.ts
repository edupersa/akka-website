// Configuración central de números de contacto del sitio.
// Cambia los valores aquí y se actualizan en todos los componentes que los usan
// (botón flotante, sección de contacto, hero, landing pages, etc).
//
// Hay dos identidades distintas — no deben mezclarse:
// - AGENTE_*: número del agente de IA (demos "habla con la IA", botón flotante).
// - AKKA_*:   número directo de AKKA para contacto real con el equipo.

// WhatsApp del agente IA, formato internacional SIN "+" (lo exige wa.me).
export const AGENTE_WHATSAPP = "34614674681";

// Voz del agente IA, formato internacional E.164 CON "+".
export const AGENTE_VOZ = "+34614674681";

// WhatsApp directo de AKKA, formato internacional SIN "+" (lo exige wa.me).
export const AKKA_WHATSAPP = "34614820732";

// Voz directa de AKKA, formato internacional E.164 CON "+".
export const AKKA_VOZ = "+34614820732";

export function buildWhatsAppLink(message: string, number: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildCallLink(number: string) {
  return `tel:${number.replace(/\s+/g, "")}`;
}
