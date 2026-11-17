// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'


import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyects from "./components/Proyects";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import PersonalIndentity from "./components/PersonalIdentity";
import Footer from "./components/Footer";

import "./App.css";
import "./Responsive.css";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <div id="top">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutMe />
                  <PersonalIndentity />
                  <Services />
                </>
              }
            />

            <Route path="/proyectos" element={<Proyects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}








// import Header from "./components/Header"; 
// import Hero from "./components/Hero";
// import Proyects from "./components/Proyects";
// import Services from "./components/Services";
// import AboutMe from "./components/AboutMe";
// import PersonalIndentity from "./components/PersonalIdentity";
// import Footer from "./components/Footer"; 
// // import homeIcon from "./assets/Icons/Home Icon.svg";

// import './App.css';

// export default function App() {
//   return(
//     <>
//     <div id="top">
//       <Header/>
//       <main> {/* Esta etiqueta solo envuelve las secciones centrales en App.tsx */}
//         <Hero /> {/* Portada principal de la página */}
//         <Proyects/>
        
//         <AboutMe/>
//         <PersonalIndentity/>
//         <Services/>
//       </main>
//       <Footer/>
//       {/* <a href="#top" className="home-float-btn" title="Return to begin">
//         <img src={homeIcon} alt="Inicio"></img>
//       </a> */}
//     </div>
//     </>
//   );
// }