import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Nuevo mensaje desde portafolio",
    html: `
      <h3>Nuevo mensaje</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });
};