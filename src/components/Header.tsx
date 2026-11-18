import { useState } from "react";
import { Link } from "react-router-dom";

import ImagotipoDB from "../assets/Elements-Header-AND-Footer/ImagotipoBlancoDB.png";

function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Cierra el menú móvil (si estaba abierto) y sube suavemente hasta el Hero
    const volverAlInicio = () => {
        setMenuAbierto(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <header>

            {/* Se mantiene la clase ImagotipoDB intacta para que no cambie el tamaño */}
      <div className="ImagotipoDB">
        <Link to="/" onClick={volverAlInicio} style={{ display: "block" }}>
          <img src={ImagotipoDB} alt="Logo Diana Benavides" />
        </Link>
      </div>

      {/* Botón hamburguesa (solo visible en móvil/tablet <= 768px) */}
      <button
        className="hamburger-btn"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Enlaces de navegación: agrega onClick={() => setMenuAbierto(false)} en cada uno */}
      <nav className={`navbar ${menuAbierto ? "open" : ""}`}>
        <Link to="/proyectos" onClick={() => setMenuAbierto(false)}>
          PROYECTOS
        </Link>
        <Link to="/#Services" onClick={() => setMenuAbierto(false)}>
          SERVICIOS
        </Link>
        <Link to="/#AboutMe" onClick={() => setMenuAbierto(false)}>
          SOBRE MI
        </Link>
        <Link to="/#PersonalIdentity" onClick={() => setMenuAbierto(false)}>
          IDENTIDAD PERSONAL
        </Link>
        <Link to="/#Contact" onClick={() => setMenuAbierto(false)}>
          CONTACTO
        </Link>
      </nav>


            {/* <Link
                to="/"
                className="header-logo-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <img src={ImagotipoDB}alt="Imagotipo Diana Benavides"/>
            </Link> */}

            {/* <div className="ImagotipoDB">
                <img src={ImagotipoDB} alt="Imagotipo Diana Benavides" />
            </div> */}

            {/* <nav className="navbar">
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/#Services">Servicios</Link>
                <Link to="/#AboutMe">Sobre mí</Link>
                <Link to="/#PersonalIdentity">Identidad personal</Link>
                <Link to="/#Contact">Contacto</Link>

                {/* <a href = "#Proyects">Proyectos</a>
                <a href = "#Services">Servicios</a>
                <a href = "#AboutMe">Sobre mi</a>
                <a href = "#PersonalIdentity">Identidad personal</a>
                <a href = "#Contact">Contacto</a> */}
            {/* </nav> */}
        </header>
    );
}

export default Header;