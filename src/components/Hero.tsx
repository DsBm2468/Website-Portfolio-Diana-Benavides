import { useRef } from "react";
// import { Link } from "react-router-dom";

import logoDB from "../assets/PersonalIdentity/Logotipo principal.png";
import pdfATS from "../assets/PDFs/Hoja_de_Vida_ATS_Diana_Sofia_Benavides.pdf";
import pdfCV from "../assets/PDFs/Diagramacion del examen parcial hoja de vida - Diana Sofia Benavides M.pdf";
import demoReel from "../assets/Elements-Header-AND-Footer/Demoreel nov 2026 (AUDIOVISUAL AND DESIGN) - Diana Benavides.mp4";

function Hero() { // Hero es el término técnico en diseño web para la portada principal de la página
    // Referencia para controlar el tiempo exacto del vistazo pequeño
    const previewRef = useRef<HTMLVideoElement>(null);
    const fullReelRef = useRef<HTMLVideoElement>(null);

    // Define aquí el tramo exacto (en segundos) que quieres repetir en el Hero:
    const segundoInicio = 6; // Salta el título inicial de "Demo Reel"
    const segundoFin = 17;   // Al llegar al segundo 10, regresa al segundo 3

    // Video grande: corta 2 segundos antes del final para no mostrar la pantalla de redes
    const segundosCortarAlFinal = 5;

    const repetirFragmento = () => {
        const video = previewRef.current;
        if (video && video.currentTime >= segundoFin) {
            video.currentTime = segundoInicio;
            video.play();
        }
    };

    const controlarVideoCompleto = () => {
        const video = fullReelRef.current;
        if (video && video.duration && video.currentTime >= video.duration - segundosCortarAlFinal) {
            video.currentTime = 0;
            video.play();
        }
    };

    return (
        <>
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

                <div className="hero-media">
                    <a href="#full-reel" className="hero-video-preview" title="Ver Demo Reel completo">
                        <video
                            ref={previewRef}
                            src={`${demoReel}#t=3`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedMetadata={() => {
                                if (previewRef.current) {
                                    previewRef.current.currentTime = segundoInicio;
                                }
                            }}
                            onTimeUpdate={repetirFragmento}
                            className="hero-preview-video"
                        />
                    </a>
                </div>
            </section>

            <section id="full-reel" className="full-reel-section">
                <video
                    ref={fullReelRef}
                    src={demoReel}
                    autoPlay
                    loop
                    muted
                    playsInline
                    // preload="metadata"
                    onTimeUpdate={controlarVideoCompleto}
                    className="full-reel-video"
                />
            </section>
        </>
    );
}

export default Hero;