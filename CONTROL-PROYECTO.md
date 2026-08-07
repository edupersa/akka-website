# Control del proyecto — Web AKKA Tech Solutions

Documento vivo de seguimiento general del proyecto: decisiones aprobadas,
estado actual y pendientes de negocio/producto. No sustituye a la
documentación técnica (eso vive en el código y en [AGENTS.md](AGENTS.md));
este documento es para control de alto nivel.

**Cómo usarlo:**
- Cada entrada indica el **origen** (qué trabajo la generó) y la **fecha**.
- Los pendientes se marcan con `[x]` a medida que se completan.
- Al iniciar un cambio importante nuevo, añade su entrada en "Decisiones
  tomadas" y, si genera tareas fuera del código, en "Pendientes" con su
  propio origen identificado.

---

## 1. Resumen del proyecto

Landing page de AKKA Tech Solutions (automatización con IA, desarrollo de
software y presencia digital para pymes/autónomos en España). Next.js 16 +
Tailwind v4. Sin backend propio: captación de contacto vía WhatsApp, email y
reserva de llamada por Calendly.

- **Titular:** Luis Eduardo Peraza Salazar — NIE 60579850N
- **Domicilio:** Calle Cardenal Enrique Tarancón 23, Burjassot (Valencia)
- **Contacto:** info@akka.es · +34 614 82 07 32

## 2. Decisiones tomadas

| Fecha | Área | Decisión | Origen |
|---|---|---|---|
| 2026-06-22 | Producto | Construcción de la landing page inicial (Hero, Servicios, Por qué AKKA, Proceso, Reservas, Contacto, Footer, botón flotante de WhatsApp). | Build inicial |
| 2026-06-27 | Reservas | Sistema de reservas basado en widget embebido de Calendly (`calendly.com/info-akkaes/main-calendar`) en vez de formulario propio. | Commit "Cambiando a calendly" |
| 2026-06-27 | Marca | Logo AKKA como favicon y en el Navbar, sustituyendo el favicon por defecto de Next.js. | Commits de logo/favicon |
| 2026-07-04 | Legal | Se añaden Aviso Legal, Política de Privacidad y Política de Cookies conformes a LSSI-CE/RGPD-LOPDGDD, identificando al titular como persona física (NIE) en proceso de alta como autónomo. | Cambio legal — páginas legales y cookies |
| 2026-07-04 | Cookies/Consentimiento | Se implementa banner de consentimiento funcional (aceptar todo / rechazar no esenciales / configurar por categoría). El widget de Calendly deja de cargarse automáticamente y ahora requiere aceptar la categoría "funcionales". | Cambio legal — páginas legales y cookies |
| 2026-07-04 | Analítica/Marketing | Se decide **no activar todavía** Google Analytics ni Meta Pixel (no hay IDs de seguimiento). Se deja la infraestructura de consentimiento y carga de scripts lista en [components/Analytics.tsx](components/Analytics.tsx), inactiva hasta configurar `.env.local`. | Cambio legal — páginas legales y cookies |
| 2026-07-16 | Proceso/Git | Se establece como norma **no commitear/pushear directo a `main`**: todo cambio de código pasa por una rama nueva y (cuando aplique) un PR. | Petición explícita del usuario |
| 2026-07-16 | Contacto | Se añade botón flotante de llamada ("Llamar a IA") junto al de WhatsApp ("Chatear con IA"), y botón "Llamar ahora" en la sección de contacto. Números centralizados en [lib/contact-config.ts](lib/contact-config.ts) para facilitar su actualización. | Petición del usuario — botón flotante de llamada |
| 2026-07-16 | Producto | Se crean landing pages por sector/función (`/clinica-estetica`, `/agente-de-voz`) con copy propio pero el mismo CTA final que el resto del sitio, pensadas para SEO por sector y para campañas de ads. Patrón pensado para repetirse con más sectores/campañas. | Rama `feature/landing-pages-sector` |
| 2026-07-16 | Contacto | Las etiquetas del botón flotante pasan a usar el color de marca de cada acción (azul/blanco para llamar, verde/negro para WhatsApp) en vez de un fondo oscuro que se confundía con la web, y ahora son clickeables (mismo destino que el botón). | Rama `feature/float-label-contrast-and-links` |

## 3. Estado actual (aprobado)

- **Landing page:** completa y desplegable — Hero, Servicios, Por qué AKKA,
  Proceso, Reservas (Calendly), Contacto, Footer, WhatsApp flotante.
- **Identidad legal del sitio:** operado como persona física (NIE
  60579850N), **aún no dado de alta como autónomo** ante Hacienda/Seguridad
  Social. Legal para publicar como web informativa; no para facturar.
- **Cumplimiento cookies/RGPD:** Aviso Legal, Política de Privacidad y
  Política de Cookies publicadas en `/aviso-legal`, `/politica-privacidad`,
  `/politica-cookies`. Banner de consentimiento activo. Ningún script de
  terceros no esencial se carga sin consentimiento.
- **Rama de trabajo:** `legal-pages-cookies-consent` (pendiente de commit y
  merge a `main`).

## 4. Pendientes

### Legal y alta de actividad
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Completar el alta como autónomo/a: censo de empresarios en Hacienda
      (modelo 036/037) y alta en RETA. **Obligatorio antes de facturar o
      cobrar por servicios.**
- [ ] Actualizar el Aviso Legal ([app/aviso-legal/page.tsx](app/aviso-legal/page.tsx))
      con el número de alta / epígrafe IAE una vez completado el trámite, y
      quitar la nota de "en trámite".
- [ ] Confirmar con un gestor/asesor fiscal el epígrafe IAE correcto.
- [ ] Revisión de los textos legales (Aviso Legal, Privacidad, Cookies) por
      un abogado o gestor antes de considerar la web 100% conforme —
      redactados a partir de plantillas estándar, no son asesoría legal
      formal.

### Analítica y marketing (no bloqueante)
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Si se activa Google Analytics: crear propiedad GA4, obtener
      Measurement ID (`G-XXXXXXX`) y añadirlo como `NEXT_PUBLIC_GA_ID` en
      `.env.local` (ver [.env.example](.env.example)). No requiere tocar
      código.
- [ ] Si se activa Meta Pixel/Ads: obtener el Pixel ID y añadirlo como
      `NEXT_PUBLIC_META_PIXEL_ID` en `.env.local`.
- [ ] Al activar cualquiera de los dos, actualizar la tabla de la
      [Política de Cookies](app/politica-cookies/page.tsx) (hoy indica
      "pendiente de activar").

### Terceros integrados — verificar acuerdos
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [ ] Calendly: confirmar que la cuenta acepta su DPA (Data Processing
      Agreement), desde la configuración de la cuenta.
- [ ] WhatsApp: confirmar que los números +34614820732 (AKKA, contacto
      directo) y +34614674681 (agente de voz IA) están dados de alta como
      WhatsApp Business (no personal) para uso comercial.

### Git
*(origen: cambio legal — páginas legales y cookies, 2026-07-04)*

- [x] Commit y merge de la rama `legal-pages-cookies-consent` a `main`
      (2026-07-04).

### Botones de contacto (flotante y CTA)
*(origen: petición del usuario — botón flotante de llamada, 2026-07-16)*

- [x] Sustituir el número placeholder de llamadas (ahora `AGENTE_VOZ` en
      [lib/contact-config.ts](lib/contact-config.ts)) por el número real del
      agente de voz IA: +34614674681 (2026-08-07). También se separó de los
      números directos de contacto con AKKA (`AKKA_WHATSAPP`/`AKKA_VOZ`,
      +34614820732), que hasta ahora compartían el mismo valor.
- [x] Hacer clickeable también el **texto** de la etiqueta del botón
      flotante (2026-07-16): ahora es un link real al mismo destino que el
      botón, y usa el color de marca de cada acción (azul/blanco para
      llamar, verde/negro para WhatsApp) en vez de fundirse con el fondo.

### Landing pages por sector/función
*(origen: rama `feature/landing-pages-sector`, 2026-07-16)*

- [x] Fusionar la rama `feature/landing-pages-sector` a `main` (PR #2,
      2026-07-16).
- [ ] Agregar una sección de "casos de uso por sector" en el home que
      enlace visualmente a estas landing pages (`/clinica-estetica`,
      `/agente-de-voz`), no solo el link discreto del footer.
- [ ] Resaltar más el botón "Saber más" de la tarjeta de servicios que
      enlaza a `/agente-de-voz` — ya se actualizó a un botón sólido
      (`btn btn-primary`), confirmar que se ve suficientemente prominente.
- [ ] A futuro: nuevas landing pages por sector/campaña siguiendo el mismo
      patrón (`components/landing/`, nav minimalista, mismo CTA final).
