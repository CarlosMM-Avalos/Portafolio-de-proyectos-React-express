import { useState } from "react";
import API from "../services/api";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    // limpia error del campo mientras escribe
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } 
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } 
    else if (form.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsError(false);
    setLoading(true);
    try {

      const res = await API.post("/contact", form);

      setStatus(res.data.message);

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      const msg = error.response?.data?.message || "Error al enviar mensaje";
      setIsError(true);
      setStatus(msg);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-gray-800 text-white py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-700"
        />
        {errors.name && <p className="text-red-400">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-700"
        />
        {errors.email && <p className="text-red-400">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-700"
          rows="5"
        ></textarea>
        {errors.message && <p className="text-red-400">{errors.message}</p>}

        <button disabled={loading} className="bg-blue-500 py-3 rounded hover:bg-blue-600 transition disabled:opacity-50">
            {loading ? "Enviando..." : "Enviar"}
        </button>

        {status && (
          <p className={`text-center ${isError ? "text-red-400" : "text-green-400"}`}>
            {status}
          </p>
        )}

      </form>
    </section>
  );
}

export default Contact;





//Version simple de validacion 
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // VALIDACIONES
//   if (!form.name || !form.email || !form.message) {
//     return setStatus("Todos los campos son obligatorios");
//   }

//   if (!form.email.includes("@")) {
//     return setStatus("Email inválido");
//   }

//   if (form.message.length < 10) {
//     return setStatus("El mensaje debe tener al menos 10 caracteres");
//   }

//   try {
//     const res = await API.post("/contact", form);
//     setStatus(res.data.message);

//     setForm({
//       name: "",
//       email: "",
//       message: ""
//     });

//   } catch (error) {
//     setStatus("Error al enviar mensaje");
//   }
// };


// SIN VALIDACION
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await API.post("/contact", form);
  //     setStatus(res.data.message);

  //     setForm({
  //       name: "",
  //       email: "",
  //       message: ""
  //     });

  //   } catch (error) {
  //     setStatus("Error al enviar mensaje");
  //   }
  // };