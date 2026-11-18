import { Link } from "react-router-dom";
import "./Proyects.css";

// ELEMENTOS DEL PROYECTO LEGACY OF THE ELEMENTS - TRAILER CINEMATICO
import img1LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/1 base dossierPORTADA.jpg";
import img2LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/DRAGON RUGIENDO.png";
import img3LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/STORYBOARD PARTE 2.png";
import img4LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/STORYBOARD PARTE 3.png";
import img5LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/STORYBOARD PARTE FINAL.png";
import video1LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/Sequence inside the Temple of Water.mp4";
import video2LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/behind the scenes - Inside the Temple of Water.mp4";
import video3LegacyElements from "../assets/Elements-Of-Proyects/LEGACY OF THE ELEMENTS/behind the scenes - Canaveral Island.mp4";

// ELEMENTOS DEL PROYECTO CAMPAMENTO DESASTRE - CORTOMETRAJE ANIMADO 3D
import img1CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/PORTADA.png";
import img2CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/MODEL SHEET PERRO COPIA.jpg";
import img3CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/BLENDER MODEL PERRO.png";
import img4CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/BLENDER CLARA DEL BOSQUE DE DIA.png";
import img5CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/BLENDER CLARA DEL BOSQUE DE NOCHE.png";
import video1CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/ESCENA-PERRO-PERSIGUE-MARIPOSA.mp4";
import video2CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/ESCENA-PERRO-ARMA-LA-TIENDA.mp4";
import video3CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/GATO-DESEPCIONADO-TIRA-SU-LIBRETA.mp4";
import video4CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/PERRO-RECOGE-LA-LIBRETA.mp4";
import video5CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/GATO-HECHO-BOLITA.mp4";
import video6CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/PERRO-DEVUELVE-LA-LIBRETA-AL-GATO.mp4";
import video7CampamentoDesastre from "../assets/Elements-Of-Proyects/CAMPAMENTO DESASTRE/FINAL-FELIZ.mp4";

// ELEMENTOS DEL PROYECTO ELEMENT CRASHER - PILOTO ANIMADO 2D
import img1ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/PORTADA.png";
import img2ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/Terreno desertico a las afueras de la ciudad.png";
import img3ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/boceto Trosh con color base.png";
import img4ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/Terreno rocoso dia de la caida del meteorito.png";
import img5ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/Lugar luego de caer el meteorito.png";
import img6ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/ciudad por dentro.png";
import img7ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/AFUERAS DEL PUEBLO NATAL DE BLAZE EN LLAMAS.png";
import video1ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/FLASHBACK CAOS EN EL PUEBLO - animatic.mp4";
import video2ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/FLASHBACK CAOS EN EL PUEBLO.mp4";
import video3ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/CAIDA DE METEORITO - animatic.mp4";
import video4ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/CAIDA DE METEORITO.mp4";
import video5ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/GENTE DE LA CIUDAD CELEBRA A BLAZE Y TROSH  - animatic.mp4";
import video6ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/GENTE DE LA CIUDAD CELEBRA A BLAZE Y TROSH.mp4";
import video7ElementCrasher from "../assets/Elements-Of-Proyects/ELEMENT CRASHER/ESCENA FINAL ajuste de tiempo.mp4";

// ELEMENTOS DEL PROYECTO TRUSTYCHAT - APLICATIVO WEB DE CONTROL PARENTAL
import img1TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/Imagen1.png";
import img2TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/MOCKUP.png";
import img3TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/PADRE Mapa de Empatía APLICACION DE COMUNICACION CON CONTROL PARENTAL_001.png";
import img4TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/User persona Madre de familia.png";
import img5TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/SITEMAP - SITIO WEB.png";
import img6TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/TASK FLOW - SITIO WEB.png";
import img7TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/USER FLOW - SITIO WEB.png";
import img8TrustyChat from "../assets/Elements-Of-Proyects/TRUSTYCHAT/WIREFLOW.png";

// ELEMENTOS DEL PROYECTO ZOODRINK - MOCKUPS DE LATAS DE BEBIDAS ENERGÉTICAS CON LOS SIGNOS ZODIACALES
import img1Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/VIRGO.png";
import img2Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/GEMINIS.png";
import img3Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/PISCIS 1.png";
import img4Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/CAPRICORNIO.png";
import video1Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/LATA VIRGO - MOCKUP.mp4";
import video2Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/LATA GEMINIS - MOCKUP.mp4";
import video3Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/LATA PISCIS - MOCKUP.mp4";
import video4Zoodrink from "../assets/Elements-Of-Proyects/ZOODRINK/LATA CAPRICORNIO - MOCKUP.mp4";

// EL LEGADO DEL DIOS CAIDO - ARTBOOK
import img1LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/1 - Artbook Legado del dios caido_Portada.png";
import img2LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-21.png";
import img3LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-22.png";
import img4LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-23.png";
import img5LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-30.png";
import img6LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-32.png";
import img7LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-39.png";
import img8LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-53.png";
import img9LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-54.png";
import img10LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-59.png";
import img11LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-121.png";
import img12LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-122.png";
import img13LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/Artbook Legado del dios caido-123.png";
import video1LegadoDios from "../assets/Elements-Of-Proyects/EL LEGADO DEL DIOS CAIDO/TEASER EL LEGADO DEL DIOS CAÍDO.mp4";


// MOLDE DE DATOS QUE INDICA QUE TENDRÁ EN CADA IMAGEN/VIDEO Y CADA PROYECTO
type MediaItem ={
  tipo: "imagen" | "video"; // Solo acepta una de estas dos palabras
  src: string; // Nombre de la variable
  ancha?: boolean; // Permite estirar una foto/video de lado a lado abajo
}

type Proyect = {
  id: number;
  titulo: string;
  rol: string;
  botones: { texto: string; url: string }[]; // Lista de botones
  principal: MediaItem; // La foto o video grande de arriba
  galeria: MediaItem[]; // Todas las fotos/videos del collage de abajo
};

// LISTA DE PROYECTOS
const ProyectsList: Proyect[] = [

  // LEGACY OF THE ELEMENTS - TRAILER CINEMATICO
  {
    id: 1, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "TRÁILER CINEMÁTICO 3D DEL VIDEOJUEGO LEGACY OF THE ELEMENTS",
    rol: "Rol en el proyecto: Dirección de Arte, Animación 3D, Iluminación y Postproducción.",
    botones: [
      { texto: "VER EN YOUTUBE", url: "https://youtu.be/wDGF4iGsRcw?si=1CvDagzvlEAEzzvh" },
      { texto: "VER A DETALLE EN LINKEDIN", url: "https://lnkd.in/p/duFgnpmH" },
      { texto: "VER A DETALLE EN ARTSTATION", url: "https://www.artstation.com/artwork/q00zGa"} ,
    ],
    principal: { tipo: "imagen", src: img1LegacyElements },
    galeria: [
      { tipo: "video", src: video1LegacyElements },
      { tipo: "video", src: video2LegacyElements },
      { tipo: "imagen", src: img2LegacyElements },
      { tipo: "imagen", src: img3LegacyElements },
      { tipo: "video", src: video3LegacyElements },
      { tipo: "imagen", src: img4LegacyElements },
      { tipo: "imagen", src: img5LegacyElements },
    ]
  },

  // CAMPAMENTO DESASTRE - CORTOMETRAJE ANIMADO 3D
  {
    id: 2, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "CORTOMETRAJE ANIMADO 3D - CAMPAMENTO DESASTRE",
    rol: "Rol en el proyecto: Dirección Narrativa, Model Sheet del perro (Segundo personaje principal), Storyboard, Layout 3D y Postproducción.",
    botones: [
      { texto: "VER A DETALLE EN LINKEDIN", url: "https://lnkd.in/p/dTPn6sza" },
      { texto: "VER A DETALLE EN ARTSTATION", url: "https://www.artstation.com/artwork/V88qmZ"} ,
    ],
    principal: { tipo: "imagen", src: img1CampamentoDesastre },
    galeria: [
      { tipo: "imagen", src: img2CampamentoDesastre },
      { tipo: "video", src: video1CampamentoDesastre },
      { tipo: "imagen", src: img3CampamentoDesastre },
      { tipo: "video", src: video2CampamentoDesastre },
      { tipo: "imagen", src: img4CampamentoDesastre },
      { tipo: "imagen", src: img5CampamentoDesastre },
      { tipo: "video", src: video3CampamentoDesastre },
      { tipo: "video", src: video4CampamentoDesastre },
      { tipo: "video", src: video5CampamentoDesastre },
      { tipo: "video", src: video6CampamentoDesastre },
      { tipo: "video", src: video7CampamentoDesastre },
    ]
  },

  // ELEMENT CRASHER - PILOTO ANIMADO 2D
  {
    id: 3, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "PILOTO 2D ANIMADO - ELEMENT CRASHER",
    rol: "Rol en el proyecto: Diseño de Trosh, Paleta de Color, Guión Técnico/Literario, Animación 2D y Postproducción.",
    botones: [
      // { texto: "VER A DETALLE EN LINKEDIN", url: "https://lnkd.in/p/dTPn6sza" },
      { texto: "VER A DETALLE EN ARTSTATION", url: "https://www.artstation.com/artwork/o00w0J"} ,
    ],
    principal: { tipo: "imagen", src: img1ElementCrasher },
    galeria: [
      { tipo: "imagen", src: img2ElementCrasher },
      { tipo: "imagen", src: img3ElementCrasher },
      { tipo: "imagen", src: img4ElementCrasher },
      { tipo: "video", src: video3ElementCrasher },
      { tipo: "video", src: video4ElementCrasher },
      { tipo: "video", src: video4ElementCrasher },
      { tipo: "imagen", src: img5ElementCrasher },
      { tipo: "imagen", src: img6ElementCrasher },
      { tipo: "imagen", src: img7ElementCrasher },
      { tipo: "video", src: video1ElementCrasher },
      { tipo: "video", src: video2ElementCrasher },
      { tipo: "video", src: video5ElementCrasher },
      { tipo: "video", src: video6ElementCrasher },
      { tipo: "video", src: video7ElementCrasher },
    ]
  },

  // TRUSTYCHAT - APLICATIVO WEB DE CONTROL PARENTAL
  {
    id: 4, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "TRUSTYCHAT UI/UX DE APLICATIVO WEB DE CONTROL PARENTAL",
    rol: "Rol en el proyecto: Concepción de la idea, diseño UI/UX e implementación de accesibilidad.",
    botones: [
      { texto: "VER A DETALLE EN LINKEDIN", url: "https://lnkd.in/p/dvi9PM6t" },
      { texto: "VER A DETALLE EN ARTSTATION", url: "https://www.artstation.com/artwork/Baax2l"} ,
    ],
    principal: { tipo: "imagen", src: img1TrustyChat },
    galeria: [
      { tipo: "imagen", src: img2TrustyChat },
      { tipo: "imagen", src: img3TrustyChat },
      { tipo: "imagen", src: img4TrustyChat },
      { tipo: "imagen", src: img5TrustyChat },
      { tipo: "imagen", src: img6TrustyChat },
      { tipo: "imagen", src: img7TrustyChat },
      { tipo: "imagen", src: img8TrustyChat },
    ]
  },

  // ZOODRINK - MOCKUPS DE LATAS DE BEBIDAS ENERGÉTICAS CON LOS SIGNOS ZODIACALES
  {
    id: 5, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "ZOODRINK - MOCKUPS DE LATAS DE BEBIDAS ENERGÉTICAS CON LOS SIGNOS ZODIACALES",
    rol: "Rol en el proyecto: Concepto de la temática híbrida entre naturaleza y tecnología, desarrollo de diseño en las latas de los signos Piscis, Capricornio, Geminis y Virgo e implementación de estos como etiquetas en las latas.",
    botones: [
    ],
    principal: { tipo: "imagen", src: img1Zoodrink },
    galeria: [
      { tipo: "video", src: video1Zoodrink },
      { tipo: "imagen", src: img2Zoodrink },
      { tipo: "video", src: video2Zoodrink },
      { tipo: "imagen", src: img3Zoodrink },
      { tipo: "video", src: video3Zoodrink },
      { tipo: "imagen", src: img4Zoodrink },
      { tipo: "video", src: video4Zoodrink },
    ]
  },

    // EL LEGADO DEL DIOS CAIDO - ARTBOOK
  {
    id: 6, // Los proyectos impares contaráan con el texto a la izq e imagen principal a la der
    titulo: "ARTBOOK “EL LEGADO DEL DIOS CAIDO”",
    rol: "Rol en el proyecto: Coautoría Narrativa, Diseño de Personajes/Props y Diagramación Editorial General.",
    botones: [
      { texto: "VER A DETALLE EN LINKEDIN", url: "https://lnkd.in/p/dighKpuB" },
      { texto: "VER A DETALLE EN ARTSTATION", url: "https://www.artstation.com/artwork/O332Bg"} ,
    ],
    principal: { tipo: "imagen", src: img1LegadoDios },
    galeria: [
      { tipo: "video", src: video1LegadoDios },
      { tipo: "imagen", src: img2LegadoDios },
      { tipo: "imagen", src: img3LegadoDios },
      { tipo: "imagen", src: img4LegadoDios },
      { tipo: "imagen", src: img5LegadoDios },
      { tipo: "imagen", src: img6LegadoDios },
      { tipo: "imagen", src: img7LegadoDios },
      { tipo: "imagen", src: img8LegadoDios },
      { tipo: "imagen", src: img9LegadoDios },
      { tipo: "imagen", src: img10LegadoDios },
      { tipo: "imagen", src: img11LegadoDios },
      { tipo: "imagen", src: img12LegadoDios },
      { tipo: "imagen", src: img13LegadoDios },
    ]
  }
]

// REVISA QUE TIPO DE ELEMENTO FUE PUESTO (video o imagen) Y LA ACOMODA SEGUN LA ETIQUETA
function RenderMedia({ item, alt }: { item: MediaItem; alt: string }) {
  if (!item.src) return null; // Si aún no has puesto archivo, no dibuja nada

  if (item.tipo === "video") {
    return <video src={item.src} controls playsInline preload="metadata" />;
  }

  return <img src={item.src} alt={alt} loading="lazy" />;
}

// APLICA EN CADA ELEMENTO DE LA LISTA ProyectsList EL MISMO DISEÑO AUTOMATICAMENTE
function Proyects() {
  return (
    <section className="proyects-page">
      <h2 className="Titles-of-sections">PROYECTOS</h2>

      <div className="proyects-container">
        {/* .map() toma cada proyecto de la lista y crea su bloque completo */}
        {ProyectsList.map((proyecto) => (
          <article key={proyecto.id} className="project-block">
            
            {/* PARTE SUPERIOR: Textos/Botones + Imagen/Video principal */}
            <div className="project-top">
              <div className="project-info">
                <h3 className="project-title">{proyecto.titulo}</h3>
                <p className="project-role">{proyecto.rol}</p>

                {/* Crea tantos botones como hayas puesto en "botones: [...]" */}
                <div className="project-buttons">
                  {proyecto.botones.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      {btn.texto}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-main-media">
                <RenderMedia item={proyecto.principal} alt={proyecto.titulo} />
              </div>
            </div>

            {/* PARTE INFERIOR: Collage de fotos y videos */}
            {proyecto.galeria.length > 0 && (
              <div className="project-gallery">
                {proyecto.galeria.map((media, idx) => (
                  <div
                    key={idx}
                    /* Si tiene ancha: true, le suma la clase "gallery-wide" */
                    className={`gallery-item ${media.ancha ? "gallery-wide" : ""}`}
                  >
                    <RenderMedia
                      item={media}
                      alt={`${proyecto.titulo} detalle ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}

          </article>
        ))}
      </div>

      <Link to="/" className="btn-back-home">
        Volver al inicio
      </Link>
    </section>
  );
}

export default Proyects;