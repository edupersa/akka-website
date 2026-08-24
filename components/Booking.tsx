"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/lib/cookie-consent";
import { pushDataLayerEvent } from "@/lib/gtm";

// Replace this URL with your actual Calendly scheduling link once you set up your account at calendly.com
const CALENDLY_URL = "https://calendly.com/info-akkaes/main-calendar";

export default function Booking() {
  const { choices, updateConsent, openPreferences } = useCookieConsent();
  const calendlyAllowed = choices.funcionales;

  useEffect(() => {
    if (!calendlyAllowed) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [calendlyAllowed]);

  useEffect(() => {
    if (!calendlyAllowed) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      switch (e.data?.event) {
        case "calendly.event_type_viewed":
          pushDataLayerEvent({ event: "ver_calendario", metodo: "calendario_web" });
          break;
        case "calendly.date_and_time_selected":
          pushDataLayerEvent({ event: "seleccion_horario_calendario", metodo: "calendario_web" });
          break;
        case "calendly.event_scheduled":
          pushDataLayerEvent({ event: "reserva_calendario", metodo: "calendario_web" });
          break;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [calendlyAllowed]);

  return (
    <section id="reservas" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Agenda una llamada</span>
          <h2>
            <span style={{ color: "#1e6fff" }}>20 minutos</span> bastan para
            saber si podemos ayudarte.
          </h2>
          <p className="sub">
            Elige el hueco que mejor te venga. Sin formularios, sin esperas.
            Esta es exactamente la misma tecnología que instalamos en tu
            negocio.
          </p>
        </div>

        {calendlyAllowed ? (
          /* Calendly inline widget */
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=080d1a&text_color=c8d8ee&primary_color=1e6fff`}
            style={{ minWidth: 320, height: 700 }}
          />
        ) : (
          <div
            style={{
              border: "1px solid #1a3a6e",
              borderRadius: 14,
              minWidth: 320,
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: 32,
              textAlign: "center",
              background: "rgba(30,111,255,0.05)",
            }}
          >
            <p style={{ color: "#8ba3be", fontSize: 15, maxWidth: 420, lineHeight: 1.6 }}>
              El calendario lo proporciona Calendly, un servicio externo que
              instala sus propias cookies. Acepta las cookies funcionales
              para poder mostrarlo, o contáctanos directamente por WhatsApp o
              email más abajo.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <button
                onClick={() => updateConsent({ funcionales: true })}
                className="btn btn-primary"
                style={{ padding: "10px 20px", fontSize: 14 }}
              >
                Aceptar y ver calendario
              </button>
              <button
                onClick={openPreferences}
                className="btn btn-ghost"
                style={{ padding: "10px 20px", fontSize: 14 }}
              >
                Configurar cookies
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
