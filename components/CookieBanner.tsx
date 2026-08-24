"use client";

import { useEffect, useState } from "react";
import { useCookieConsent, type ConsentChoices } from "@/lib/cookie-consent";
import { pushDataLayerEvent } from "@/lib/gtm";

function trackConsent(accion: string, choices: ConsentChoices) {
  pushDataLayerEvent({ event: "consentimiento_cookies", accion, ...choices });
}

const CATEGORY_INFO: {
  key: keyof ConsentChoices;
  title: string;
  description: string;
}[] = [
  {
    key: "funcionales",
    title: "Funcionales (terceros)",
    description:
      "Permiten cargar el calendario de reservas (Calendly). Sin ellas no podrás reservar una llamada directamente desde la web.",
  },
  {
    key: "analiticas",
    title: "Analíticas",
    description:
      "Nos ayudan a entender cómo se usa la web (Google Analytics) para mejorarla. Se recogen de forma agregada.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description:
      "Permiten medir y personalizar anuncios (Meta Pixel/Ads) en función de tu visita a la web.",
  },
];

export default function CookieBanner() {
  const {
    hasDecided,
    choices,
    isPreferencesOpen,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const [draft, setDraft] = useState<ConsentChoices>(choices);

  // Keep the modal's checkboxes in sync with the stored choices every time
  // it's opened (e.g. reopened later from the footer link), not just when
  // triggered from the banner's own "Configurar" button.
  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreferencesOpen]);

  if (hasDecided === null) return null;

  const showBanner = !hasDecided && !isPreferencesOpen;
  const showModal = isPreferencesOpen;

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de cookies"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 300,
            background: "#0d1428",
            borderTop: "1px solid #1a3a6e",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#c8d8ee",
                fontSize: 14,
                lineHeight: 1.6,
                maxWidth: 640,
              }}
            >
              Usamos cookies propias y de terceros (Calendly, y en el futuro
              analítica y marketing) para ofrecerte la reserva de llamada y
              mejorar la web. Puedes aceptarlas todas, rechazar las no
              esenciales o configurarlas.{" "}
              <a
                href="/politica-cookies"
                style={{ color: "#00c8e0", textDecoration: "underline" }}
              >
                Más información
              </a>
              .
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  setDraft(choices);
                  openPreferences();
                }}
                className="btn btn-ghost"
                style={{ padding: "10px 18px", fontSize: 14 }}
              >
                Configurar
              </button>
              <button
                onClick={() => {
                  trackConsent("rechazar_no_esenciales", {
                    funcionales: false,
                    analiticas: false,
                    marketing: false,
                  });
                  rejectNonEssential();
                }}
                className="btn btn-ghost"
                style={{ padding: "10px 18px", fontSize: 14 }}
              >
                Rechazar no esenciales
              </button>
              <button
                onClick={() => {
                  trackConsent("aceptar_todo", {
                    funcionales: true,
                    analiticas: true,
                    marketing: true,
                  });
                  acceptAll();
                }}
                className="btn btn-primary"
                style={{ padding: "10px 18px", fontSize: 14 }}
              >
                Aceptar todo
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preferencias de cookies"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 400,
            background: "rgba(2, 5, 12, 0.72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePreferences();
          }}
        >
          <div
            style={{
              background: "#0d1428",
              border: "1px solid #1a3a6e",
              borderRadius: 16,
              maxWidth: 560,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "32px 28px",
            }}
          >
            <h2 style={{ fontSize: 22, marginBottom: 8, color: "#fff" }}>
              Preferencias de cookies
            </h2>
            <p
              style={{
                color: "#8ba3be",
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Elige qué categorías de cookies quieres permitir. Las
              necesarias siempre están activas porque el sitio no funciona
              sin ellas. Consulta la{" "}
              <a
                href="/politica-cookies"
                style={{ color: "#00c8e0", textDecoration: "underline" }}
              >
                política de cookies
              </a>{" "}
              para más detalle.
            </p>

            <div
              style={{
                border: "1px solid #1a3a6e",
                borderRadius: 12,
                padding: "14px 16px",
                marginBottom: 14,
                background: "rgba(30,111,255,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <strong style={{ color: "#fff", fontSize: 15 }}>
                  Necesarias
                </strong>
                <span style={{ fontSize: 12, color: "#4a6080" }}>
                  Siempre activas
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#8ba3be",
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                Guardan tu elección de cookies. No requieren consentimiento.
              </p>
            </div>

            {CATEGORY_INFO.map((cat) => (
              <label
                key={cat.key}
                style={{
                  display: "block",
                  border: "1px solid #1a3a6e",
                  borderRadius: 12,
                  padding: "14px 16px",
                  marginBottom: 14,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <strong style={{ color: "#fff", fontSize: 15 }}>
                    {cat.title}
                  </strong>
                  <input
                    type="checkbox"
                    checked={draft[cat.key]}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, [cat.key]: e.target.checked }))
                    }
                    style={{ width: 18, height: 18, accentColor: "#1e6fff" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#8ba3be",
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </p>
              </label>
            ))}

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-end",
                marginTop: 10,
              }}
            >
              <button
                onClick={closePreferences}
                className="btn btn-ghost"
                style={{ padding: "10px 18px", fontSize: 14 }}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  trackConsent("guardar_preferencias", draft);
                  savePreferences(draft);
                }}
                className="btn btn-primary"
                style={{ padding: "10px 18px", fontSize: 14 }}
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
