import express from "express";
import Message from "../models/Message.js";
import { sendEmail } from "../utils/mailer.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();
    const message = req.body.message?.trim();

    // VALIDACIONES
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios"
      });
    }

    if (name.length < 2) {
      return res.status(400).json({
        message: "El nombre es demasiado corto"
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Email inválido"
      });
    }

    

    if (message.length < 10) {
      return res.status(400).json({
        message: "El mensaje debe tener al menos 10 caracteres"
      });
    }

    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();
    //ENVIAR CORREO
    await sendEmail({ name, email, message });

    res.json({ message: "Mensaje guardado correctamente.." });

  } catch (error) {
    console.error("ERROR BACKEND:", error); // 🔥 CLAVE

    res.status(500).json({ 
      message: "Error en el servidor",
      error: error.message // opcional para debug
    });
  }
});

export default router;