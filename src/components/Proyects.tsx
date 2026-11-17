import { Link } from "react-router-dom";

function Proyects() {
  return (
    <section className="projects-container">
      <h2 className="Titles-of-sections">PROYECTOS</h2>

      <p className="projects-intro">
        Página independiente de proyectos funcionando correctamente.
      </p>

      <Link to="/" className="btn-back-home">
        Volver al inicio
      </Link>
    </section>
  );
}

export default Proyects;