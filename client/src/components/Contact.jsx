function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Contacto
      </h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded bg-gray-700"
        />

        <input
          type="email"
          placeholder="Tu email"
          className="p-3 rounded bg-gray-700"
        />

        <textarea
          placeholder="Tu mensaje"
          className="p-3 rounded bg-gray-700"
          rows="5"
        ></textarea>

        <button className="bg-blue-500 py-3 rounded hover:bg-blue-600 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;