"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const solutionLinks = [
  { href: "/clinica-estetica", label: "Clínicas estéticas" },
  { href: "/agente-de-voz", label: "Agente de voz para empresas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!solutionsOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [solutionsOpen]);

  const closeMenu = () => {
    setOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(15, 33, 71, 0.8)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        backgroundColor: scrolled
          ? "rgba(8, 13, 26, 0.97)"
          : "rgba(8, 13, 26, 0.78)",
        transition: "background-color 0.3s",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Brand */}
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="AKKA Tech Solutions — inicio"
        >
          <Image
            src="/akka_logo_01.png"
            alt="AKKA Tech Solutions"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="desktop-nav"
          aria-label="Navegación principal"
        >
          {/* Soluciones dropdown */}
          <div ref={solutionsRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setSolutionsOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: solutionsOpen ? "#fff" : "#8ba3be",
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "inherit",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) => {
                if (!solutionsOpen)
                  (e.currentTarget as HTMLElement).style.color = "#8ba3be";
              }}
            >
              Soluciones
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{
                  transform: solutionsOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {solutionsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: 14,
                }}
              >
                <div
                  style={{
                    minWidth: 240,
                    background: "#0d1428",
                    border: "1px solid #1a3a6e",
                    borderRadius: 12,
                    padding: 8,
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {solutionLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setSolutionsOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 12px",
                        borderRadius: 8,
                        color: "#c8d8ee",
                        fontSize: 14,
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "rgba(30,111,255,0.12)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "transparent")
                      }
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {["#servicios", "#por-que", "#proceso", "#reservas"].map(
            (href, i) => {
              const labels = ["Servicios", "Por qué AKKA", "Proceso", "Reservas"];
              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: "#8ba3be",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#8ba3be")
                  }
                >
                  {labels[i]}
                </a>
              );
            }
          )}
          <a href="#contacto" className="btn btn-ghost" style={{ padding: "9px 20px", fontSize: 14 }}>
            Contactar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "#c8d8ee",
            display: "none",
          }}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "#0d1428",
            borderTop: "1px solid #0f2147",
            padding: "12px 0 20px",
          }}
        >
          {/* Soluciones accordion */}
          <button
            type="button"
            onClick={() => setMobileSolutionsOpen((v) => !v)}
            aria-expanded={mobileSolutionsOpen}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "13px 24px",
              color: "#c8d8ee",
              fontSize: 15,
              fontWeight: 500,
              fontFamily: "inherit",
              borderBottom: "1px solid rgba(15, 33, 71, 0.5)",
            }}
          >
            Soluciones
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{
                transform: mobileSolutionsOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {mobileSolutionsOpen &&
            solutionLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "13px 24px 13px 40px",
                  color: "#8ba3be",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  background: "rgba(30,111,255,0.06)",
                  borderBottom: "1px solid rgba(15, 33, 71, 0.5)",
                }}
              >
                {s.label}
              </a>
            ))}

          {[
            ["#servicios", "Servicios"],
            ["#por-que", "Por qué AKKA"],
            ["#proceso", "Proceso"],
            ["#reservas", "Reservas"],
            ["#contacto", "Contactar"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{
                display: "block",
                padding: "13px 24px",
                color: "#c8d8ee",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid rgba(15, 33, 71, 0.5)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
