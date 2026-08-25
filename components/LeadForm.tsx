"use client";

import { useState } from "react";
import { pushDataLayerEvent } from "@/lib/gtm";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1a3a6e",
  background: "rgba(8, 13, 26, 0.6)",
  color: "#e6ecf7",
  fontSize: 14.5,
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "#8ba3be",
  marginBottom: 6,
};

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      setErrorMsg("Acepta la política de privacidad para poder enviarte una respuesta.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: humanos nunca rellenan este campo (queda oculto por CSS).
    if (data.get("empresa_web")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          email: data.get("email"),
          telefono: data.get("telefono"),
          mensaje: data.get("mensaje"),
          pagina_origen: window.location.pathname,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "No se pudo enviar el formulario.");
      }

      setStatus("success");
      pushDataLayerEvent({ event: "registro_formulario_web", form_id: "formulario_contacto" });
      form.reset();
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el formulario. Escríbenos por WhatsApp mientras lo solucionamos."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          border: "1px solid #1a3a6e",
          borderRadius: 14,
          padding: "28px 24px",
          textAlign: "center",
          background: "rgba(31, 143, 95, 0.08)",
        }}
      >
        <p style={{ color: "#c8d8ee", fontSize: 15.5, margin: 0 }}>
          Gracias — hemos recibido tus datos y te contactaremos en menos de 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 480 }}>
      {/* Honeypot anti-spam: invisible para personas, visible para bots */}
      <input
        type="text"
        name="empresa_web"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="lead-nombre" style={labelStyle}>Nombre *</label>
        <input id="lead-nombre" name="nombre" type="text" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="lead-email" style={labelStyle}>Email *</label>
        <input id="lead-email" name="email" type="email" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="lead-telefono" style={labelStyle}>Teléfono (opcional)</label>
        <input id="lead-telefono" name="telefono" type="tel" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="lead-mensaje" style={labelStyle}>¿Qué necesitas? (opcional)</label>
        <textarea id="lead-mensaje" name="mensaje" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#8ba3be" }}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, width: 16, height: 16, accentColor: "#1e6fff", flexShrink: 0 }}
        />
        <span>
          Acepto que AKKA Tech Solutions guarde estos datos para contactarme, según la{" "}
          <a href="/politica-privacidad" style={{ color: "#00c8e0", textDecoration: "underline" }}>
            política de privacidad
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p style={{ color: "#e2605f", fontSize: 13.5, margin: 0 }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
        style={{ alignSelf: "flex-start", opacity: status === "sending" ? 0.7 : 1 }}
      >
        {status === "sending" ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
