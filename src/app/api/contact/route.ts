import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'RESEND_API_KEY is missing' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, projectType, message } = body;

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'khyati.canvas@gmail.com',
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Portfolio Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}