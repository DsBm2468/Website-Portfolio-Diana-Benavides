import myselfPhoto from "../assets/AboutMe/FOTO PERSONAL.jpg";
// import myselfToon from "../assets/AboutMe/Diana Sofia Caricatura.png";
import myselfToon from "../assets/AboutMe/RETRATO.svg";
// import { useEffect, useRef } from "react";

// import "./AboutMe.css";

function AboutMe(){
    return(
    <section id="AboutMe" className="about-container">
        <h2 className="Titles-of-sections">SOBRE MÍ</h2>
        
        {/* PERFIL PROFESIONAL */}

        <div className="about-body">
            <div className="about-photos">
                <img src={myselfPhoto} alt="photo Diana Benavides" className="photoDiana"></img>
                <img src={myselfToon} alt="Toon Diana Benavides" className="toonDiana"></img>
            </div>
            
            <div className="about-content">

                <h3 style={{ color: "#2D3748"}}>PERFIL PROFESIONAL</h3>
                <p className="about-me">
                    Como Ingeniera Multimedia, concibo cada proyecto como el punto donde 
                    la precisión del código se encuentra con la dirección visual. Mi trabajo 
                    va más allá de estructurar interfaces; me enfoco en crear experiencias 
                    interactivas con propósito.
                </p>

                <p className="about-me">
                    Mi proceso integra investigación, desarrollo técnico y composición estética, 
                    asegurando que cada interacción, animación y línea de código responda a un 
                    objetivo claro y funcional.
                </p>
            </div>
        </div>

        {/* HABILIDADES, PROGRAMAS Y SOFTWARE */}

        <div className="skills-and-software">
            <div className="skills-column">
                <h3>HABILIDADES</h3>
                <ul className="skills-list">
                    <li>Dirección creativa y narrativa.</li>
                    <li>Producción audiovisual y compositing.</li>
                    <li>Modelado y animación 3D.</li>
                    <li>Desarrollo de Videojuegos y entornos interactivos.</li>
                </ul>
            </div>

            <div className="software-column">
                <h3>PROGRAMAS Y SOFTWARE</h3>
                <ul className="software-list">
                    <li>Diseño, ilustración y animación 2D.</li>
                    <li>Compositing (Edición de audio y video).</li>
                    <li>Modelado y animación 3D.</li>
                    <li>Desarrollo de Videojuegos y entornos interactivos.</li>
                </ul>
            </div>
        </div>

        {/* EDUCACIÓN */}

        <div className="education">
            <div className="education-title">
                <h3>EDUCACIÓN</h3>
            </div>

            <div className="education-scroll-info">
                <h2>FORMACIÓN PRINCIPAL</h2>
                <div className="education-card">
                    <h4 style={{ color: "#2D3748"}}>Ingeniería en Multimedia</h4>
                    <h4 style={{ color: "#2D3748"}}>Enero 2023 - Presente</h4>
                    <p style={{ color: "#2D3748"}}>Universidad de Boyacá</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#2D3748"}}>Bachiller académico con profundización en Matemáticas</h4>
                    <h4 style={{ color: "#2D3748"}}>Enero 2017 - Diciembre 2021</h4>
                    <p style={{ color: "#2D3748"}}>Institución Educativa El Rosario de Paipa</p>
                </div>
                
                <h2>FORMACIÓN COMPLEMENTARIA</h2>
                
                 <div className="education-card">
                    <h4 style={{ color: "#2D3748"}}>Certificación "This is Animation"</h4>
                    <h4 style={{ color: "#2D3748"}}>Julio 2025</h4>
                    <p style={{ color: "#2D3748"}}>Yellowbrick (en alianza con Sony Pictures Animation y Sony Pictures Imageworks)</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#2D3748"}}>Certificación de Iniciación al Desarrollo con IA</h4>
                    <h4 style={{ color: "#2D3748"}}>Julio 2026</h4>
                    <p style={{ color: "#2D3748"}}>BigSchool & mouredev</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#2D3748"}}>Certificación de Asistencia al curso de Iniciación al Marketing Digital con Inteligencia Artificial</h4>
                    <h4 style={{ color: "#2D3748"}}>Octubre 2026</h4>
                    <p style={{ color: "#2D3748"}}>BigSchool & mouredev</p>
                </div>
            </div>
        </div>

        {/* EXPERIENCIA */}

        <div className="experience">
           
            <div className="experience-scroll-info">
                <div className="experience-card">
                    <h4 style={{ color: "#FFFFFF"}}>Auxiliar de Comunicación Visual</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Febrero 2026 - Mayo 2026</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Oficina de Comunicación y Mercadeo</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Universidad de Boyacá</h4>
                    <p style={{ color: "#FFFFFF"}}>Desarrollo de piezas gráficas en diferentes formatos de 
                        banners con el objetivo de divulgación institucional.</p>
                </div>

                <div className="experience-card">
                    <h4 style={{ color: "#FFFFFF"}}>Gestora de Contenido Digital</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Agosto 2025 - Noviembre 2025</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Bienestar Universitario</h4>
                    <h4 style={{ color: "#FFFFFF"}}>Universidad de Boyacá</h4>
                    <p style={{ color: "#FFFFFF"}}>Publicación de contenidos digitales e informativos 
                        en redes sociales institucionales.</p>
                </div>
            </div>

             <div className="experience-title">
                <h3 style={{ color: "#ffffff", WebkitTextStroke: "0.5px #ffffff"}}>EXPERIENCIA</h3>
            </div>
        </div>

        {/* LOGROS DESTACADOS */}

        <div className="education" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="education-title">
                <h3 style={{ color: "#055A74", WebkitTextStroke: "0.5px #055A74"}}>LOGROS DESTACADOS</h3>
                <a href="#Proyects" className="btn-projects">
                    Ver proyectos
                    <br></br>
                    a detalle
                </a>
            </div>

            <div className="education-scroll-info">
                <div className="education-card">
                    <h4 style={{ color: "#055A74"}}>Producción multimedia y dirección general</h4>
                    <h4 style={{ color: "#055A74"}}>Tráiler cinemático animado de videojuego</h4>
                    <p style={{ color: "#055A74"}}>Destacando por la calidad técnica en su edición de audio y video.</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#055A74"}}>Producción general</h4>
                    <h4 style={{ color: "#055A74"}}>Piloto animado 2D</h4>
                    <p style={{ color: "#055A74"}}>Destacado por su alta complejidad en el desarrollo de escenas de combate.</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#055A74"}}>Desarrollo integral</h4>
                    <h4 style={{ color: "#055A74"}}>Cortometraje 3D</h4>
                    <p style={{ color: "#055A74"}}>Destacado por la solidez de su narrativa visual y diseño conceptual.</p>
                </div>

                <div className="education-card">
                    <h4 style={{ color: "#055A74"}}>Participación y clasificación de proyecto de investigación</h4>
                    <p style={{ color: "#055A74"}}>El proyecto de investigación sobre el desarrollo de un videojuego educativo 2D
                        multimedia para reforzar las competencias en matemáticas básicas con números enteros en estudiantes de grado sexto 
                        participó en la Red Colombiana de semilleros de Investigación (RedCOLSI) a nivel departamental (Boyacá) y clasificó al nivel Nacional.
                    </p>
                </div>
            </div>
        </div>

        {/* IDIOMAS */}
        <div className="languages">
            <div className="education-title">
                <h3 style={{ color: "#055A74", WebkitTextStroke: "0.5px #055A74"}}>IDIOMAS</h3>
            </div>

            <div className="languages-bars-column">
                
                {/* ESPAÑOL*/}
                <div className="languages-row">
                    <p className="languages-name">ESPAÑOL</p>
                    
                    <div className="progress-track" style={{ "--nivel": "100%" } as React.CSSProperties}> 
                        {/* en CSS, cualquier palabra que empiece con -- se reconoce como una variable personalizada creada por el programador */}
                        {/* Se pasa el porcentaje máximo a CSS mediante la variable "--nivel" */}
                        <div className="liquid-fill">
                            <p>Lengua materna</p>
                        </div>
                    </div>
                </div>

                {/* Inglés*/}
                <div className="languages-row">
                    <p className="languages-name">INGLÉS</p>
                     
                    <div className="progress-track" style={{ "--nivel": "70%" } as React.CSSProperties}> 
                        {/* en CSS, cualquier palabra que empiece con -- se reconoce como una variable personalizada creada por el programador */}
                        {/* Se pasa el porcentaje máximo a CSS mediante la variable "--nivel" */}
                        <div className="liquid-fill">
                            <p>Intermedio (B1)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default AboutMe;