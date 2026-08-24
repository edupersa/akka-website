import { AKKA_VOZ, AKKA_WHATSAPP, buildCallLink, buildWhatsAppLink } from "@/lib/contact-config";
import { pushDataLayerEvent } from "@/lib/gtm";

const WA_LINK = buildWhatsAppLink(
  "Hola, quiero saber más sobre los servicios de AKKA",
  AKKA_WHATSAPP
);
const CALL_LINK = buildCallLink(AKKA_VOZ);

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="wrap">
        <div
          data-animate
          style={{
            border: "1px solid #1a3a6e",
            borderRadius: 20,
            padding: "clamp(40px, 6vw, 68px) clamp(28px, 5vw, 64px)",
            textAlign: "center",
            background: `radial-gradient(ellipse 700px 380px at 50% 0%, rgba(30,111,255,0.12), transparent 60%), rgba(13, 20, 40, 0.85)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle corner glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,200,224,0.07), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Hablemos
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 50px)",
              marginTop: 14,
              marginBottom: 16,
            }}
          >
            ¿Listo para que tu negocio{" "}
            <span style={{ color: "#1e6fff" }}>trabaje solo</span>?
          </h2>

          <p
            style={{
              color: "#8ba3be",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.65,
              maxWidth: 480,
              margin: "0 auto 36px",
            }}
          >
            Una consulta de 20 minutos es suficiente para ver si podemos
            ayudarte. Sin compromisos, sin tecnicismos.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            <a
              href={WA_LINK}
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushDataLayerEvent({ event: "abrir_chat_ia", origen: "seccion_contacto" })
              }
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.463 3.526 1.338 5.063L2 22l5.07-1.323A9.969 9.969 0 0 0 12.004 22C17.531 22 22 17.531 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.154 8.154 0 0 1-4.163-1.143l-.299-.177-3.012.786.807-2.942-.194-.31A8.179 8.179 0 1 1 12.004 20.18z"/>
              </svg>
              Hablar por WhatsApp
            </a>

            <a
              href={CALL_LINK}
              className="btn btn-primary"
              onClick={() =>
                pushDataLayerEvent({ event: "click_llamada_ia", ubicacion: "seccion_contacto" })
              }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Llamar ahora
            </a>

            <a
              href="mailto:info@akka.es"
              className="btn btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              info@akka.es
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              fontSize: 13,
              color: "#4a6080",
            }}
          >
            <span>Sin compromiso</span>
            <span>·</span>
            <span>Respuesta en menos de 24h</span>
            <span>·</span>
            <span>Consulta inicial gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
}
