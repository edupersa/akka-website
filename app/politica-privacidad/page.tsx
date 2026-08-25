import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | AKKA Tech Solutions",
  description:
    "Cómo AKKA Tech Solutions trata los datos personales de las personas que contactan o reservan una consulta a través del sitio web.",
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout>
      <h1>Política de Privacidad</h1>
      <p className="legal-updated">Última actualización: 25 de agosto de 2026</p>

      <p>
        En AKKA Tech Solutions tratamos tus datos personales con
        responsabilidad y de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y
        la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía
        de los derechos digitales (LOPDGDD). Esta política explica qué datos
        recogemos, con qué finalidad, durante cuánto tiempo y qué derechos
        puedes ejercer.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> Luis Eduardo Peraza Salazar (AKKA
          Tech Solutions)
        </li>
        <li>
          <strong>NIE:</strong> 60579850N
        </li>
        <li>
          <strong>Domicilio:</strong> Calle Cardenal Enrique Tarancón, 23,
          Burjassot, Valencia, España
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:info@akka.es">info@akka.es</a>
        </li>
      </ul>

      <h2>2. ¿Qué datos tratamos y con qué finalidad?</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Vía de contacto</th>
              <th>Datos tratados</th>
              <th>Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Formulario de contacto (web)</td>
              <td>Nombre, email y, si los aportas, teléfono y mensaje</td>
              <td>Atender tu consulta y contactarte para ofrecerte información comercial</td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td>Nombre, número de teléfono y contenido de la conversación</td>
              <td>Atender tu consulta y ofrecerte información comercial</td>
            </tr>
            <tr>
              <td>Correo electrónico (info@akka.es)</td>
              <td>Nombre, email y contenido del mensaje</td>
              <td>Responder a tu consulta</td>
            </tr>
            <tr>
              <td>Reserva de llamada (Calendly)</td>
              <td>Nombre, email y, en su caso, teléfono y notas aportadas</td>
              <td>Gestionar la cita y recordarte la reserva</td>
            </tr>
            <tr>
              <td>Navegación (cookies analíticas/marketing, si las aceptas)</td>
              <td>Identificador de dispositivo/cookie, páginas visitadas</td>
              <td>Medir el uso de la web y, en su caso, mostrar anuncios personalizados</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        No recogemos categorías especiales de datos (salud, ideología,
        origen étnico, etc.) ni tomamos decisiones automatizadas que
        produzcan efectos jurídicos sobre ti.
      </p>

      <h2>3. Base legal del tratamiento</h2>
      <ul>
        <li>
          <strong>Atención de consultas y gestión de reservas:</strong>{" "}
          ejecución de medidas precontractuales a solicitud tuya (art. 6.1.b
          RGPD).
        </li>
        <li>
          <strong>Formulario de contacto:</strong> tu consentimiento
          expreso, otorgado al marcar la casilla de aceptación antes de
          enviar el formulario (art. 6.1.a RGPD). Puedes retirarlo en
          cualquier momento solicitando la supresión de tus datos.
        </li>
        <li>
          <strong>Cookies analíticas y de marketing:</strong> tu
          consentimiento expreso, otorgado a través del banner de cookies
          (art. 6.1.a RGPD). Puedes retirarlo en cualquier momento.
        </li>
      </ul>

      <h2>4. ¿A quién se comunican los datos?</h2>
      <p>
        No vendemos ni cedemos tus datos a terceros con fines comerciales
        propios. Determinados proveedores acceden a tus datos como
        encargados del tratamiento, únicamente para prestar el servicio
        correspondiente:
      </p>
      <ul>
        <li>
          <strong>Calendly LLC</strong> (EE. UU.) — gestión de la reserva de
          llamadas.
        </li>
        <li>
          <strong>Meta Platforms Ireland Ltd.</strong> — mensajería a través
          de WhatsApp.
        </li>
        <li>
          <strong>Google Ireland Ltd.</strong> — alojamiento del correo
          electrónico; almacenamiento temporal de los envíos del formulario
          de contacto (en una hoja de cálculo de Google Sheets, mientras no
          exista un sistema propio de gestión de clientes); y, si en el
          futuro aceptas cookies analíticas, Google Analytics.
        </li>
        <li>
          <strong>Meta Platforms Ireland Ltd.</strong> — si en el futuro
          aceptas cookies de marketing, Meta Pixel/Ads.
        </li>
      </ul>
      <p>
        Estos proveedores solo se activan y reciben datos cuando el
        tratamiento correspondiente forma parte del contacto que iniciaste
        (WhatsApp, email, Calendly) o cuando has dado tu consentimiento
        explícito mediante el banner de cookies (analítica y marketing).
        Consulta la{" "}
        <a href="/politica-cookies">Política de Cookies</a> para más
        detalle.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Algunos de los proveedores anteriores (Calendly, Meta, Google) pueden
        transferir datos fuera del Espacio Económico Europeo, en particular a
        Estados Unidos. Estas transferencias se realizan al amparo de
        garantías reconocidas por el RGPD, como el Marco de Privacidad de
        Datos UE-EE. UU. (Data Privacy Framework) o las Cláusulas
        Contractuales Tipo aprobadas por la Comisión Europea.
      </p>

      <h2>6. Plazo de conservación</h2>
      <p>
        Conservamos los datos de contacto y reserva mientras sean necesarios
        para atender tu solicitud y, salvo que solicites su supresión antes,
        durante un máximo de 12 meses desde el último contacto si no se
        formaliza ninguna relación comercial. Si se inicia una relación
        contractual, los datos derivados de la misma (por ejemplo, facturas)
        se conservarán durante los plazos exigidos por la normativa mercantil
        y tributaria (con carácter general, 6 años conforme al Código de
        Comercio y hasta 4 años a efectos fiscales).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad de tus datos, así como retirar tu consentimiento cuando
        el tratamiento se base en él, escribiendo a{" "}
        <a href="mailto:info@akka.es">info@akka.es</a> e identificándote
        adecuadamente. También tienes derecho a presentar una reclamación
        ante la Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        ) si consideras que el tratamiento de tus datos no se ajusta a la
        normativa vigente.
      </p>

      <h2>8. Origen de los datos</h2>
      <p>
        Los datos que tratamos proceden directamente de ti, a través de los
        canales de contacto que utilices (formulario de contacto, WhatsApp,
        correo electrónico o el formulario de reserva de Calendly), o de tu
        navegación en el Sitio Web si aceptas cookies analíticas o de
        marketing.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger
        tus datos frente a accesos no autorizados, pérdida o alteración,
        adecuadas al volumen y naturaleza de los datos tratados.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta Política de Privacidad para adaptarla a
        cambios normativos o en los servicios ofrecidos. La fecha de la
        última actualización figura al inicio de este documento.
      </p>
    </LegalLayout>
  );
}
