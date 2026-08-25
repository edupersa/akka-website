import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: {
    nombre?: unknown;
    email?: unknown;
    telefono?: unknown;
    mensaje?: unknown;
    pagina_origen?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const telefono = typeof body.telefono === "string" ? body.telefono.trim() : "";
  const mensaje = typeof body.mensaje === "string" ? body.mensaje.trim() : "";
  const paginaOrigen = typeof body.pagina_origen === "string" ? body.pagina_origen : "";

  if (!nombre || !email) {
    return NextResponse.json({ error: "Nombre y email son obligatorios." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "El email no parece válido." }, { status: 400 });
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEADS_WEBHOOK_URL no está configurada — el lead no se pudo guardar.");
    return NextResponse.json(
      { error: "El formulario aún no está conectado. Escríbenos por WhatsApp mientras tanto." },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEADS_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.LEADS_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        nombre,
        email,
        telefono,
        mensaje,
        pagina_origen: paginaOrigen,
        fecha: new Date().toISOString(),
      }),
    });

    // Algunos webhooks (ej. Google Apps Script) siempre responden HTTP 200
    // aunque hayan fallado — por eso además revisamos el cuerpo devuelto.
    const upstreamBody = await upstream.json().catch(() => null);
    if (!upstream.ok || upstreamBody?.error) {
      console.error("LEADS_WEBHOOK_URL respondió con error:", upstream.status, upstreamBody);
      return NextResponse.json(
        { error: "No se pudo guardar tu solicitud. Escríbenos por WhatsApp mientras tanto." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Fallo al llamar a LEADS_WEBHOOK_URL:", err);
    return NextResponse.json(
      { error: "No se pudo guardar tu solicitud. Escríbenos por WhatsApp mientras tanto." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
