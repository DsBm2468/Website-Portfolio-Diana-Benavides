import logoDB from "../assets/PersonalIdentity/Logotipo principal.png";
import pdfATS from "../assets/PDFs/Hoja_de_Vida_ATS_Diana_Sofia_Benavides.pdf";
import pdfCV from "../assets/PDFs/Diagramacion del examen parcial hoja de vida - Diana Sofia Benavides M.pdf";

function Hero(){ // Hero es el término técnico en diseño web para la portada principal de la página
    return(
    <section id="Hero" className="hero-container">
        <div className="hero-content">
            <img src={logoDB} alt="Logo Diana Benavides" className="LogoBDinHero"></img>
            
            <p className="hero-text">
                Ingeniera Multimedia, especializada en combinar 
                el rigor técnico con una narrativa visual cinematográfica.
            </p>

            <p className="hero-text">
                No creo productos genéricos; diseño soluciones multimedia interactivas, 
                entretenidas y de alta calidad que capturan la verdadera esencia de 
                cada concepto y buscan conectar profundamente con el espectador.
            </p>
            
            <div className="hero-btns">
                <a 
                href="#Proyects" 
                className="link-proyects">
                    Ver proyectos
                </a>

                <a 
                href={pdfATS}
                target="_blank"
                rel="noreferrer"
                className="btn-cv">
                    CV ATS
                </a>
                
                <a
                href={pdfCV}
                target="_blank"
                rel="noreferrer"
                className="btn-cv">
                    CV VISUAL</a>
            </div>
        </div>

        <div className="hero-media"></div>

    </section>
    );
}

export default Hero;