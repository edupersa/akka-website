"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCookieConsent } from "@/lib/cookie-consent";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué AKKA" },
  { href: "#proceso", label: "Proceso" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

const solutionLinks = [
  { href: "/clinica-estetica", label: "Clínicas estéticas" },
  { href: "/agente-de-voz", label: "Agente de voz para empresas" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Privacidad" },
  { href: "/politica-cookies", label: "Cookies" },
];

export default function Footer() {
  const { openPreferences } = useCookieConsent();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#050810",
        borderTop: "1px solid #0f2147",
        padding: "44px 0 52px",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 32,
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#top"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 10,
              }}
              aria-label="AKKA Tech Solutions — inicio"
            >
              <Image
                src="/akka_logo_01.png"
                alt="AKKA Tech Solutions"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </a>
            <p style={{ fontSize: 13, color: "#4a6080", margin: 0, maxWidth: 240, lineHeight: 1.6 }}>
              Automatización e IA para negocios que quieren crecer sin contratar más personal.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={isHome ? l.href : `/${l.href}`}
                    style={{
                      color: "#4a6080",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c8d8ee")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#4a6080")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions by sector/function */}
          <nav aria-label="Soluciones">
            <p style={{ fontSize: 12, color: "#4a6080", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Soluciones
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: "#8ba3be",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c8d8ee")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#8ba3be")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid #0f2147",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "#4a6080", margin: 0 }}>
            © {year} AKKA Tech Solutions · info@akka.es
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {legalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontSize: 12, color: "#4a6080", textDecoration: "none" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#c8d8ee")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#4a6080")
                }
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={openPreferences}
              style={{
                fontSize: 12,
                color: "#4a6080",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline",
              }}
            >
              Configurar cookies
            </button>
          </div>

          <p style={{ fontSize: 12, color: "#4a6080", margin: 0 }}>
            Hecho con IA · Desarrollado con ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
