import tarifario from "../assets/PDFs/Tabla de servicios y costos - Diana Sofia Benavides M.pdf";

function Services(){
    return(
        <section id="Services" className="services-container">
            <h3 className="Titles-of-sections">SERVICIOS</h3>
            <p className="services-introduction">Ofrezco soluciones integrales en 
                producción audiovisual, 3D y desarrollo interactivo. Cada servicio 
                se adapta a las necesidades del proyecto, con tarifas definidas por 
                hora, por segundo de animación o por entregable global.
            </p>

            <div className="services-grid">
                <div className="service-card">
                    <h4>Asesoría y consultoría multimedia.</h4>
                    <h5>Unidad de cobro por hora</h5>
                    <p>Alcance: Acompañamiento y revisión técnica/creativa sobre 3D, VFX, narrativa o interacción.</p>
                </div>

                <div className="service-card">
                    <h4>Dirección narrativa y guión interactivo.</h4>
                    <h5>Unidad de cobro por proyecto / mes</h5>
                    <p>Alcance:Conceptualización visual, guion técnico, diseño de personajes y arquitectura de interacción (Biblia de Arte).</p>
                </div>

                <div className="service-card">
                    <h4>Animación 2D digital.</h4>
                    <h5>Unidad de cobro por proyecto / minuto de animación</h5>
                    <p>Alcance: Preproducción (storyboard/guion) y producción de animación digital 2D (frame-to-frame / cut-out) a color HD.</p>
                </div>

                <div className="service-card">
                    <h4>Modelado y Renderizado 3D.</h4>
                    <h5>Unidad de cobro por asset / personaje / minuto</h5>
                    <p>Alcance: </p>
                    <ul>
                        <li>Assets y Retopología.</li>
                        <li>Rigging corporal / facial y Weight Painting.</li>
                        <li>Texturizado PBR, animación 3D y renderizado HD.</li>
                    </ul>     
                </div>

                <div className="service-card">
                    <h4>Compositing y postproducción audiovisual.</h4>
                    <h5>Unidad de cobro por minuto de video</h5>
                    <p>Alcance: Montaje/edición base, corrección de color, composición multicapa y efectos visuales (VFX).</p>
                </div>

                <div className="service-card">
                    <h4>Desarrollo de entornos virtuales interactivos.</h4>
                    <h5>Unidad de cobro por prototipo / proyecto</h5>
                    <p>Alcance: Programación e integración de escenarios en Unity / Unreal Engine con lógica de interacción y UI.</p>
                </div>
            </div>

            {/* Botón inferior: puedes cambiar "#" por el enlace a tu PDF, Notion o modal de precios */}
            <a 
                href={tarifario} target="_blank"
                rel="noreferrer" className="btn-tarifario">
                VER TARIFARIO COMPLETO (PDF)
            </a>
        </section>
    );
}

export default Services;