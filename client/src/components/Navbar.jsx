import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      <h1 className="text-xl font-bold">
        CarlosMAvalos.dev
      </h1>

      <div className="space-x-6">

        <Link to="/" className="hover:text-blue-300 transition">
          Inicio
        </Link>

        <Link to="/#about" className="hover:text-blue-300 transition">
          Sobre mí
        </Link>

        <Link to="/#skills" className="hover:text-blue-300 transition">
          Skills
        </Link>

        <Link to="/projects" className="hover:text-blue-300 transition">
          Proyectos
        </Link>

        <Link to="/#contact" className="hover:text-blue-300 transition">
          Contacto
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;