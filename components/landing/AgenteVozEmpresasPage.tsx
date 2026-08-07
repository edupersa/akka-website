"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AGENTE_VOZ, buildCallLink } from "@/lib/contact-config";
import LandingNav from "@/components/landing/LandingNav";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const CALL_LINK = buildCallLink(AGENTE_VOZ);

const painPoints = [
  {
    icon: "📵",
    title: "Ocupado atendiendo, el teléfono no para",
    desc: "Estás en una reunión o atendiendo a otro cliente y el teléfono sigue sonando.",
    delay: "0s",
  },
  {
    icon: "🌙",
    title: "Fuera de horario, nadie contesta",
    desc: "Alguien llama con intención real de comprar — y no hay nadie para atenderlo.",
    delay: "0.08s",
  },
  {
    icon: "🏃",
    title: "Cuando devuelves la llamada, ya es tarde",
    desc: "Ya decidieron con otro proveedor mientras tú intentabas devolver la llamada.",
    delay: "0.16s",
  },
];

const features = [
  {
    icon: "📞",
    title: "Desviamos tu número actual",
    desc: "Cuando no contestas (ocupado, fuera de horario, comunicando), entra tu agente de IA.",
    delay: "0s",
  },
  {
    icon: "🤝",
    title: "Cualifica con cercanía real",
    desc: "Entiende el problema del cliente y genera confianza — no suena a script leído.",
    delay: "0.08s",
  },
  {
    icon: "📅",
    title: "Agenda la cita y avisa",
    desc: "Directo en tu calendario, con recordatorio automático incluido.",
    delay: "0.16s",
  },
  {
    icon: "🔔",
    title: "Te enteras de cada llamada",
    desc: "Nada se pierde: tienes registro de cada conversación.",
    delay: "0.24s",
  },
];

const campaignBenefits = [
  {
    icon: "🔥",
    title: "Cualifica en caliente",
    desc: "Cuando un lead entra por una campaña, tu agente contesta al instante y lo cualifica mientras el interés está fresco — antes de que compare con otro anuncio.",
  },
  {
    icon: "🚦",
    title: "Sin cuellos de botella",
    desc: "Si una campaña explota y entran 30 llamadas en una hora, el bot atiende a todas en paralelo. Un humano no puede — y cada llamada en espera es un lead que se va.",
  },
  {
    icon: "💸",
    title: "Protege lo que ya pagaste",
    desc: "Si pagas por cada clic o lead pero los pierdes por no contestar a tiempo, estás tirando presupuesto de marketing. El bot hace que esa inversión realmente convierta.",
  },
];

export default function AgenteVozEmpresasPage() {
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
              Para empresas y PYMEs
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
              No pierdas ni un cliente por{" "}
              <span style={{ color: "#1e6fff" }}>no contestar el teléfono</span>
            </h1>

            <p
              style={{
                color: "#8ba3be",
                fontSize: "clamp(16px, 2.2vw, 19px)",
                lineHeight: 1.65,
                maxWidth: 600,
                marginBottom: 36,
              }}
            >
              Configuramos tu número actual para que, cuando no contestas, tu
              agente de IA conteste por ti — atiende, genera confianza, agenda
              la cita y{" "}
              <strong style={{ color: "#c8d8ee" }}>
                ese cliente no se va a la competencia.
              </strong>
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={CALL_LINK} className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Llama ahora y habla con mi IA
              </a>
              <a href="#reservas" className="btn btn-ghost">
                Agenda una consulta
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
              <span className="eyebrow">El problema</span>
              <h2>
                Cada llamada sin contestar es un cliente{" "}
                <span style={{ color: "#00c8e0" }}>hablando con tu competencia</span>
              </h2>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
              className="grid-3"
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

        {/* How it works */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Así funciona</span>
              <h2>
                Tu recepcionista de{" "}
                <span style={{ color: "#1e6fff" }}>respaldo, 24/7</span>
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

        {/* Campaign benefits */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Si inviertes en publicidad</span>
              <h2>
                Esto te interesa{" "}
                <span style={{ color: "#00c8e0" }}>más todavía</span>
              </h2>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
              className="grid-3"
            >
              {campaignBenefits.map((c) => (
                <div
                  key={c.title}
                  data-animate
                  style={{
                    border: "1px solid #1a3a6e",
                    borderRadius: 14,
                    padding: "26px 22px",
                    background: "rgba(13, 20, 40, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: "2rem", lineHeight: 1 }} aria-hidden="true">
                    {c.icon}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "#fff", margin: 0 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#8ba3be", margin: 0, lineHeight: 1.7 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / objection handling */}
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
                ¿Suena robótico?
              </span>
              <p style={{ color: "#c8d8ee", fontSize: 17, lineHeight: 1.7, maxWidth: 720, marginTop: 12 }}>
                La voz suena muy real. Antes de activarla en tu número, la
                pruebas tú mismo — y si algo no encaja, se corrige antes de
                ponerla a funcionar. Nada sale al aire sin que lo hayas
                aprobado.
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
          .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
