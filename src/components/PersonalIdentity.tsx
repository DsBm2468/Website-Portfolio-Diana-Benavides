import logo from "../assets/PersonalIdentity/Logotipo principal.png";
import imagotype from "../assets/PersonalIdentity/Imagotipo Principal.png";
import alternLogo1 from "../assets/PersonalIdentity/Logotipo Alterno 1.png";
import alternLogo2 from "../assets/PersonalIdentity/Logotipo Alterno 2.png";
import alternImagotype1 from "../assets/PersonalIdentity/Imagotipo Alterno 1.png";
import alternImagotype2 from "../assets/PersonalIdentity/Imagotipo Alterno 2.png";
function PersonalIndentity(){
    return(
    <section id="PersonalIdentity" className="personal-identity">
            {/* <h3 className="Titles-of-sections">IDENTIDAD PERSONAL</h3> */}
            <h3>IDENTIDAD PERSONAL</h3>

        {/* COLORES */}
        <div className="identity-colors">
            
            {/* COLORES PRINCIPALES */}
            <div className="color-groups">
                <h4>Colores principales</h4>

                <div className="color-row"> {/* Caja horizontal para poner dos círculos uno al lado del otro */}
                    <div className="color-item"> {/* Guardará el color y le dara la forma redonda, además de cer un color encima de otro */}
                        <div className="color-circle" style={{backgroundColor: "#055A74", border: "#033442"}}></div>
                        <p className="color-hex" style={{ color: "#055A74" }}>#055A74</p>
                    </div>

                    <div className="color-item"> {/* Guardará el color y le dara la forma redonda, además de cer un color encima de otro */}
                        <div className="color-circle" style={{backgroundColor: "#FFFFFF", border: "#888888"}}></div>
                        <p className="color-hex" style={{ color: "#888888" }}>#FFFFFF</p>
                    </div>

                    {/* <div className="color-item"> Guardará el color y le dara la forma redonda, además de cer un color encima de otro */}
                        {/* <div className="color-circle" style={{backgroundColor: "#7EBBCF", border: "#4B8DA3"}}></div>
                        <p className="color-hex" style={{ color: "#7EBBCF" }}>#7EBBCF</p>
                    </div> */}
                </div>
            </div>

            {/* COLOR ALTERNO */}
            <div className="color-groups">
                <h4>Color alterno</h4>

                <div className="color-row"> {/* Caja horizontal para poner dos círculos uno al lado del otro */}
                    <div className="color-item"> {/* Guardará el color y le dara la forma redonda, además de cer un color encima de otro */}
                        <div className="color-circle" style={{backgroundColor: "#7EBBCF", border: "#4B8DA3"}}></div>
                        <p className="color-hex" style={{ color: "#7EBBCF" }}>#7EBBCF</p>
                    </div>
                </div>
            </div>

            {/* COLOR FUNCIONAL */}
            <div className="color-groups">
                <h4>Color funcional</h4>

                <div className="color-row"> {/* Caja horizontal para poner dos círculos uno al lado del otro */}
                    <div className="color-item"> {/* Guardará el color y le dara la forma redonda, además de cer un color encima de otro */}
                        <div className="color-circle" style={{backgroundColor: "#2D3748", border: "#000000"}}></div>
                        <p className="color-hex" style={{ color: "#2D3748" }}>#2D3748</p>
                    </div>
                </div>
            </div>
        </div>

        {/* LOGOTIPO E IMAGOTIPO */}
        <div className="identity-logos">
            <div className="logo-box">
                <h4>Logotipo</h4>
                <img src={logo} alt="logotype" className="logotype"></img>
            </div>

            <div className="logo-box">
                <h4>Imagotipo</h4>
                <img src={imagotype} alt="imagotype" className="imagotype"></img>
            </div>
        </div>

        {/* ADAPTABILITY TEST */}
        <div className="adaptability-section">
            <h4>Test de adaptabilidad</h4>

            <div className="adaptability-split"> {/* Contenedor que divide la pantalla en 2 */}

                <div className="adaptability-half bg-light"> {/* "adaptability-half" le da el 50% de ancho y "bg-light" el color #7EBBCF */}
                    <div className="adaptability-grid"> {/* Cuadro */}
                        <img src={alternLogo2} alt="logoaltern2" className="adaptability-img"></img>
                        <img src={imagotype} alt="imagotype" className="adaptability-img"></img>
                        <img src={logo} alt="logo" className="adaptability-img"></img>
                        <img src={alternImagotype2} alt="imagotype2" className="adaptability-img"></img>
                    </div>
                </div>

                <div className="adaptability-half bg-dark"> {/* "adaptability-half" le da el 50% de ancho y "bg-light" el color #7EBBCF */}
                    <div className="adaptability-grid"> {/* Cuadro */}
                        <img src={alternLogo2} alt="logoaltern2"  className="adaptability-img"></img>
                        <img src={alternImagotype1} alt="imagotype1"  className="adaptability-img"></img>
                        <img src={alternLogo1} alt="logoaltern1"  className="adaptability-img"></img>
                        <img src={alternImagotype2} alt="imagotype2"  className="adaptability-img"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PersonalIndentity;