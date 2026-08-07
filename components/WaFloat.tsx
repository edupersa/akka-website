import { AGENTE_VOZ, AGENTE_WHATSAPP, buildCallLink, buildWhatsAppLink } from "@/lib/contact-config";

const WA_LINK = buildWhatsAppLink(
  "Hola, me interesa una consulta con AKKA Tech Solutions",
  AGENTE_WHATSAPP
);
const CALL_LINK = buildCallLink(AGENTE_VOZ);

function FloatButton({
  href,
  label,
  ariaLabel,
  external,
  bg,
  hoverBg,
  shadow,
  hoverShadow,
  labelTextColor,
  pulseClass,
  labelDelay,
  children,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
  bg: string;
  hoverBg: string;
  shadow: string;
  hoverShadow: string;
  labelTextColor: string;
  pulseClass: string;
  labelDelay: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="float-label"
        style={{ background: bg, color: labelTextColor, animationDelay: labelDelay }}
      >
        {label}
      </a>

      <div style={{ position: "relative", width: 56, height: 56 }}>
        <div className={pulseClass} aria-hidden="true" />
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel}
          style={{
            position: "relative",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: bg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: shadow,
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1.1)";
            el.style.boxShadow = hoverShadow;
            el.style.background = hoverBg;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1)";
            el.style.boxShadow = shadow;
            el.style.background = bg;
          }}
        >
          {children}
        </a>
      </div>
    </div>
  );
}

export default function WaFloat() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 14,
        }}
      >
        <FloatButton
          href={CALL_LINK}
          label="Llamar a IA"
          ariaLabel="Llamar a IA"
          bg="#1e6fff"
          hoverBg="#3a80ff"
          shadow="0 4px 20px rgba(30, 111, 255, 0.40)"
          hoverShadow="0 8px 32px rgba(30, 111, 255, 0.55)"
          labelTextColor="#fff"
          pulseClass="call-float-pulse"
          labelDelay="0s"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </FloatButton>

        <FloatButton
          href={WA_LINK}
          label="Chatear con IA"
          ariaLabel="Contactar por WhatsApp"
          external
          bg="#25d366"
          hoverBg="#20bd5a"
          shadow="0 4px 20px rgba(37, 211, 102, 0.40)"
          hoverShadow="0 8px 32px rgba(37, 211, 102, 0.55)"
          labelTextColor="#000"
          pulseClass="wa-float-pulse"
          labelDelay="4s"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.463 3.526 1.338 5.063L2 22l5.07-1.323A9.969 9.969 0 0 0 12.004 22C17.531 22 22 17.531 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.154 8.154 0 0 1-4.163-1.143l-.299-.177-3.012.786.807-2.942-.194-.31A8.179 8.179 0 1 1 12.004 20.18z"/>
          </svg>
        </FloatButton>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.55; }
          70%  { transform: scale(1.65); opacity: 0; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        .wa-float-pulse, .call-float-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: wa-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        .wa-float-pulse { border: 2px solid rgba(37, 211, 102, 0.45); }
        .call-float-pulse { border: 2px solid rgba(30, 111, 255, 0.45); }

        .float-label {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          padding: 8px 14px;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
        }
        .float-label:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        /* On small screens the label doesn't stay on permanently (no room for it) —
           it peeks into view every few seconds instead, then collapses to zero width. */
        @media (max-width: 420px) {
          .float-label {
            max-width: 0;
            padding-left: 0;
            padding-right: 0;
            box-shadow: none;
            opacity: 0;
            animation: float-label-peek 7s ease-in-out infinite;
          }
        }
        @keyframes float-label-peek {
          0%, 60%   { opacity: 0; max-width: 0;     padding-left: 0;   padding-right: 0;   box-shadow: none; }
          70%, 88%  { opacity: 1; max-width: 220px; padding-left: 14px; padding-right: 14px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35); }
          97%, 100% { opacity: 0; max-width: 0;     padding-left: 0;   padding-right: 0;   box-shadow: none; }
        }
        @media (max-width: 420px) and (prefers-reduced-motion: reduce) {
          .float-label { animation: none; display: none; }
        }
      `}</style>
    </>
  );
}
