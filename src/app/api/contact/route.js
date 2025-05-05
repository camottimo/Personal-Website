import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL, // your Gmail address
        pass: process.env.CONTACT_EMAIL_PASS, // your Gmail app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'camottimo@gmail.com',
      subject: `New message from ${firstName} ${lastName}`,
      text: `Phone: ${phone}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
