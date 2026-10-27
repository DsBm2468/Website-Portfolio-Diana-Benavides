import ImagotipoDB from "../assets/Elements-Header-AND-Footer/ImagotipoBlancoDB.png";

function Header(){
    return(
        <header>
            <div className = "ImagotipoDB">
                <img src={ImagotipoDB}alt="Imagotipo Diana Benavides"/>
            </div>
            
            <nav className = "navbar">
                <a href = "#Proyects">Proyectos</a>
                <a href = "#Services">Servicios</a>
                <a href = "#AboutMe">Sobre mi</a>
                <a href = "#PersonalIdentity">Identidad personal</a>
                <a href = "#Contact">Contacto</a>
                </nav>
        </header>
    );
}

export default Header;