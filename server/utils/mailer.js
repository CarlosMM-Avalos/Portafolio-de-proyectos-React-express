import nodemailer from "nodemailer";

// 🔧 Configuración del transporter (IMPORTANTE: puerto 587)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // false para TLS (587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🔍 (Opcional pero PRO) verificar conexión al iniciar
transporter.verify()
  .then(() => console.log("SMTP listo para enviar correos"))
  .catch((error) => console.error("Error SMTP:", error));

// 📩 Función para enviar email
export const sendEmail = async ({ name, email, message }) => {
  try {
    await transporter.sendMail({
      from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // te llega a ti
      subject: "Nuevo mensaje desde portafolio",
      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("📧 Email enviado correctamente");

  } catch (error) {
    console.error("❌ Error enviando email:", error);
    throw error; // importante para que el backend lo capture
  }
};