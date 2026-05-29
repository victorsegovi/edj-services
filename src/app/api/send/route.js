import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    const data = await resend.emails.send({
      from: 'EDJ & Services <info@edjgroup.net>',
      to: ['victorst.tellex@gmail.com'],
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${mensaje}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}