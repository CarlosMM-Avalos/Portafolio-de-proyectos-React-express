import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";



{/* PARA FUNCIONAR EL NAV CON SCROLL*/}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Home() {
  {/* PARA FUNCIONAR EL NAV CON SCROLL*/}
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);






  return (
    <>
      {/* HERO */}
      <div
        id="home"
        className="bg-gray-900 text-white min-h-screen flex items-center justify-center"
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Hola, soy Carlos Maximiliano Madariaga Ávalos 👋
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            Desarrollador Full Stack especializado en aplicaciones modernas
          </p>

          <a
            href="/projects"
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Ver Proyectos
          </a>
        </div>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;