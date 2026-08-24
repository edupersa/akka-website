"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AGENTE_VOZ, AGENTE_WHATSAPP, buildCallLink, buildWhatsAppLink } from "@/lib/contact-config";
import { pushDataLayerEvent } from "@/lib/gtm";
import LandingNav from "@/components/landing/LandingNav";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const WA_LINK = buildWhatsAppLink(
  "Hola, quiero saber cómo la IA puede ayudar a mi clínica estética",
  AGENTE_WHATSAPP
);
const CALL_LINK = buildCallLink(AGENTE_VOZ);

const painPoints = [
  {
    icon: "📵",
    title: "Se te escapan llamadas mientras atiendes",
    desc: "Estás con una paciente y el teléfono no para de sonar. Cuando devuelves la llamada, ya reservó cita en otra clínica.",
    delay: "0s",
  },
  {
    icon: "🌙",
    title: "Nadie contesta fuera de horario",
    desc: "A las 22h alguien pregunta por un tratamiento. Nadie contesta hasta el día siguiente — para entonces ya decidió en otro sitio.",
    delay: "0.08s",
  },
  {
    icon: "📋",
    title: "No-shows que te cuestan dinero",
    desc: "Los recordatorios se hacen a mano y a veces se pasan: pacientes que no confirman ni avisan, y pierdes ese hueco de agenda.",
    delay: "0.16s",
  },
  {
    icon: "🔁",
    title: "Las mismas preguntas, todo el día",
    desc: "El equipo repite todo el día lo mismo (precio, si duele, cuánto dura) en vez de atender a quien tiene delante.",
    delay: "0.24s",
  },
];

const features = [
  {
    icon: "💬",
    title: "Responde al instante, día y noche",
    desc: "WhatsApp y llamadas atendidas en segundos, 24/7, sin que dependa de que alguien esté libre.",
    delay: "0s",
  },
  {
    icon: "📅",
    title: "Agenda y confirma citas",
    desc: "Directo en tu calendario, sin que nadie tenga que estar pendiente del teléfono para cerrarlo.",
    delay: "0.08s",
  },
  {
    icon: "⏰",
    title: "Recordatorios automáticos",
    desc: "Menos olvidos, menos no-shows: más huecos de agenda que realmente se ocupan.",
    delay: "0.16s",
  },
  {
    icon: "❓",
    title: "Resuelve dudas de tratamientos",
    desc: "Precio orientativo, duración, si duele... con la información exacta que tú le des.",
    delay: "0.24s",
  },
];

export default function ClinicaEsteticaPage() {
  useScrollReveal();

  return (
    <>
      <LandingNav />
      <main>
        {/* Hero */}
        <section id="top" style={{ padding: "96px 0 80px" }}>
          <div className="wrap">
            <div className="badge" style={{ marginBottom: 28 }}>
              <span className="badge-dot" />
              Para clínicas estéticas
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6.5vw, 66px)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                maxWidth: 820,
                marginBottom: 24,
              }}
            >
              Que ninguna paciente se vaya a{" "}
              <span style={{ color: "#1e6fff" }}>la competencia</span> por no
              contestar a tiempo
            </h1>

            <p
              style={{
                color: "#8ba3be",
                fontSize: "clamp(16px, 2.2vw, 19px)",
                lineHeight: 1.65,
                maxWidth: 580,
                marginBottom: 36,
              }}
            >
              Un agente de IA responde WhatsApp y llamadas de tu clínica al
              instante, agenda consultas y confirma citas —{" "}
              <strong style={{ color: "#c8d8ee" }}>
                24/7, aunque estés con una paciente o sea de madrugada.
              </strong>
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={WA_LINK}
                className="btn btn-wa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushDataLayerEvent({ event: "abrir_chat_ia", origen: "hero_landing_clinica" })
                }
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.463 3.526 1.338 5.063L2 22l5.07-1.323A9.969 9.969 0 0 0 12.004 22C17.531 22 22 17.531 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.154 8.154 0 0 1-4.163-1.143l-.299-.177-3.012.786.807-2.942-.194-.31A8.179 8.179 0 1 1 12.004 20.18z"/>
                </svg>
                Habla con la IA, como si fueras una paciente
              </a>
              <a href="#reservas" className="btn btn-ghost">
                Agenda tu consulta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">¿Te suena esto?</span>
              <h2>
                Lo que más nos repiten{" "}
                <span style={{ color: "#00c8e0" }}>las clínicas</span>
              </h2>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
              className="grid-4"
            >
              {painPoints.map((p) => (
                <div
                  key={p.title}
                  data-animate
                  style={
                    {
                      "--delay": p.delay,
                      padding: "26px 22px",
                      borderRadius: 12,
                      background: "rgba(13, 20, 40, 0.5)",
                      border: "1px solid #1a3a6e",
                      borderLeft: "3px solid #1e6fff",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      transition: "background 0.2s, border-color 0.2s",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(13, 20, 40, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(13, 20, 40, 0.5)";
                  }}
                >
                  <span style={{ fontSize: "1.9rem", lineHeight: 1 }} aria-hidden="true">
                    {p.icon}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.25 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#8ba3be", margin: 0, lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Qué hace por tu clínica</span>
              <h2>
                Tu clínica atiende sola,{" "}
                <span style={{ color: "#1e6fff" }}>las 24 horas</span>
              </h2>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
              className="grid-4"
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  data-animate
                  style={
                    {
                      "--delay": f.delay,
                      border: "1px solid #1a3a6e",
                      borderRadius: 14,
                      padding: "26px 22px",
                      background: "rgba(13, 20, 40, 0.7)",
                      transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s, background 0.25s",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#1e6fff";
                    el.style.transform = "translateY(-5px)";
                    el.style.boxShadow = "0 12px 40px -8px rgba(30, 111, 255, 0.28)";
                    el.style.background = "rgba(13, 20, 40, 0.95)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#1a3a6e";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.background = "rgba(13, 20, 40, 0.7)";
                  }}
                >
                  <span style={{ fontSize: "2rem", lineHeight: 1 }} aria-hidden="true">
                    {f.icon}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "#fff", margin: 0 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#8ba3be", margin: 0, lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign callout */}
        <section className="section">
          <div className="wrap">
            <div
              data-animate
              style={{
                border: "1px solid #1a3a6e",
                borderRadius: 20,
                padding: "clamp(32px, 5vw, 48px)",
                background: `radial-gradient(ellipse 600px 300px at 15% 0%, rgba(0,200,224,0.10), transparent 60%), rgba(13, 20, 40, 0.85)`,
              }}
            >
              <span className="eyebrow" style={{ marginBottom: 14 }}>
                Si haces publicidad en Instagram o Meta Ads
              </span>
              <p style={{ color: "#c8d8ee", fontSize: 17, lineHeight: 1.7, maxWidth: 720, marginTop: 12 }}>
                Alguien ve tu anuncio, escribe con interés real... y si nadie
                contesta en minutos, sigue viendo el siguiente anuncio de la
                competencia. Tu agente responde en el segundo uno, mientras el
                interés todavía está caliente — así no regalas el clic que ya
                pagaste.
              </p>
            </div>
          </div>
        </section>

        <Booking />
        <Contact />
      </main>
      <Footer />
      <WaFloat />

      <style>{`
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
