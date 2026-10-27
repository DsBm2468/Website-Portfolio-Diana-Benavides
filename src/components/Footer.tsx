import LogotipoDB from "../assets/Elements-Header-AND-Footer/LogotipoBlanco.png";

import iconCorreo from "../assets/Icons/Email Icon.svg";
import iconLinkedIn from "../assets/Icons/LinkedIn Icon.svg";
import iconBehance from "../assets/Icons/Behance Icon.svg";
import iconArtStation from "../assets/Icons/ArtStation Icon.svg";

function Footer(){
    return(
    <footer id="Contact" className="footer">
        
        {/* MENSAJE DE INVITACIÓN */}
        <div className="Mensage-to-colaborate">
            <h2>¿Tienes un proyecto en mente?</h2>
            <h2>Trabajemos juntos.</h2>
        </div>

        {/* REDES*/}
        <div className="SocialMedia-Links">
            {/* target="_blank" abre la URL de destino en una pestaña o ventana nueva 
            y rel="noreferrer" evita enviar la cabecera HTTP Referer a la página de destino. La web a la que entra el usuario no sabrá que llegó desde la dirección de tu portafolio.*/}

            {/* CORREO ELECTRONICO */}
            <a 
              href = "https://mail.google.com/mail/?view=cm&fs=1&to=dsbenavides@uniboyaca.edu.co&su=Consulta%20de%20Proyecto&body=Hola%20Diana,%20me%20gustar%C3%ADa%20trabajar%20contigo%20en%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
            >
            {/* <a href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZZQQBtwbvTPcJhVMLjLnSkPSbsXtHndPKLsgcnvLkpZKdZgsFmzsprGnFLVLGlZcZwRBV mailto:dsbenavides@uniboyaca.edu.co"> */}
                <img src={iconCorreo}alt="Icono correo" className="btn-Icon"/>

                Correo

            </a>

            {/* LINKEDIN */}
            <a
              href = "https://www.linkedin.com/in/diana-sofia-benavides-monroy-749640438"
              target="_blank"
              rel="noreferrer"
            >
                <img src={iconLinkedIn}alt="Icono linkedin" className="btn-Icon"/>
             
                LinkedIn

            </a>

            {/* BEHANCE */}
            <a
              href = "https://www.behance.net/DsBm"
              target="_blank"
              rel="noreferrer"
            >

                <img src={iconBehance}alt="Icono behance" className="btn-Icon"/>

                Behance

            </a>

            {/* ARTSTATION */}
            <a
              href = "https://www.artstation.com/dianabenavides"
              target="_blank"
              rel="noreferrer"
            >
                
                <img src={iconArtStation}alt="Icono artstation" className="btn-Icon"/>
                
                ArtStation
                
            </a>
        </div>

        {/* FINAL DEL FOOTER*/}
        <div className="footer-Bottom">
            <div className = "LogoDB">
                <img src={LogotipoDB}alt="Logo Diana Benavides"/>
            </div>

            {/* <div className="divider-line"/> */}
            <hr />

            © 2026 design
        </div>

    </footer>
    );
}

export default Footer;