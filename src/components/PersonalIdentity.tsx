import logo from "../assets/PersonalIdentity/Logotipo principal.png";
import imagotype from "../assets/PersonalIdentity/Imagotipo Principal.png";

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
        <div className="about-photos">
            <div className="logo-box">
                <h4>Logotipo</h4>
                <img src={logo} alt="logotype" className="logotype"></img>
            </div>

            <div className="logo-box">
                <h4>Imagotipo</h4>
                <img src={imagotype} alt="imagotype" className="imagotype"></img>
            </div>
        </div>
    </section>
    );
}

export default PersonalIndentity;