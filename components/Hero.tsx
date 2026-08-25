import Link from "next/link";
import { AKKA_WHATSAPP, buildWhatsAppLink } from "@/lib/contact-config";
import { pushDataLayerEvent } from "@/lib/gtm";

const WA_LINK = buildWhatsAppLink(
  "Hola, quiero saber más sobre los servicios de AKKA",
  AKKA_WHATSAPP
);

const stats = [
  { num: "5+", label: "Servicios" },
  { num: "24/7", label: "Disponibilidad" },
  { num: "ES · EN", label: "Idiomas" },
  { num: "100%", label: "A medida" },
];

export default function Hero() {
  return (
    <section
      id="top"
      style={{ padding: "96px 0 80px" }}
    >
      <div className="wrap">
        {/* Badge */}
        <div className="badge" style={{ marginBottom: 28 }}>
          <span className="badge-dot" />
          Disponible · Español · English · y más
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(40px, 7.5vw, 76px)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          Tu negocio atiende solo,
          <br />
          <span style={{ color: "#1e6fff" }}>las 24 horas </span>
          <span style={{ color: "#00c8e0" }}>del día.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            color: "#8ba3be",
            fontSize: "clamp(16px, 2.2vw, 19px)",
            lineHeight: 1.65,
            maxWidth: 580,
            marginBottom: 36,
          }}
        >
          Agentes IA que responden por ti en WhatsApp, Gmail e Instagram.
          Reservas automáticas, web que convierte y software a medida.{" "}
          <strong style={{ color: "#c8d8ee" }}>Sin contratar más personal.</strong>
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
          <a
            href={WA_LINK}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushDataLayerEvent({ event: "abrir_chat_akka", origen: "hero_principal" })
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.463 3.526 1.338 5.063L2 22l5.07-1.323A9.969 9.969 0 0 0 12.004 22C17.531 22 22 17.531 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.154 8.154 0 0 1-4.163-1.143l-.299-.177-3.012.786.807-2.942-.194-.31A8.179 8.179 0 1 1 12.004 20.18z"/>
            </svg>
            Quiero una consulta gratis
          </a>
          <a href="#servicios" className="btn btn-ghost">
            Ver servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid #1a3a6e",
            borderRadius: 14,
            background: "rgba(13, 20, 40, 0.8)",
            overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "20px 16px",
                textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid #1a3a6e" : "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 3vw, 28px)",
                  color: "#1e6fff",
                  lineHeight: 1.1,
                  marginBottom: 4,
                }}
              >
                {s.num}
              </span>
              <span style={{ fontSize: 11, color: "#8ba3be", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          #top > .wrap > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #top > .wrap > div:last-child > div:nth-child(2) {
            border-right: 1px solid #1a3a6e !important;
          }
          #top > .wrap > div:last-child > div:nth-child(3) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
