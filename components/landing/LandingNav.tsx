"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { pushDataLayerEvent } from "@/lib/gtm";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="AKKA Tech Solutions — inicio"
          onClick={() =>
            pushDataLayerEvent({
              event: "navegacion_seccion",
              pagina_origen: "landing",
              pagina_destino: "principal",
            })
          }
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

        <a href="#contacto" className="btn btn-ghost" style={{ padding: "9px 20px", fontSize: 14 }}>
          Reservar consulta
        </a>
      </div>
    </header>
  );
}
