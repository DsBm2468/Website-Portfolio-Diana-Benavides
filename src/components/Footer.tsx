import LogotipoDB from "../assets/Elements-Header-AND-Footer/LogotipoBlanco.png";

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
              href = 'mailto:mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZdBnsvKcBPZMTFnXlPTslGhTkKhjgRgMVlnRFqZpxKtWvNwGfQfXVQDnvqctpRQHbWkDV'
              target="_blank"
              rel="noreferrer"
            >
                Correo
            </a>

            {/* LINKEDIN */}
            <a
              href = 'www.linkedin.com/in/diana-sofia-benavides-monroy-749640438'
              target="_blank"
              rel="noreferrer"
            >
                LinkedIn
            </a>

            {/* BEHANCE */}
            <a href = "#Proyects">
                Behance
            </a>

            {/* ARTSTATION */}
            <a href = "#Proyects">
                ArtStation
            </a>
        </div>

        {/* FINAL DEL FOOTER*/}
        <div className="footer-Bottom">
            <div className = "LogoDB">
                <img src={LogotipoDB}alt="Logo Diana Benavides"/>
            </div>

            <div className="divider-line"/>
            
            <p>© 2026 design</p>
        </div>

    </footer>
    );
}

export default Footer;