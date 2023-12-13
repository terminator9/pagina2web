import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
// Importa tus componentes de páginas aquí
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Noticias from "./pages/Noticias";
import NuestraPropuesta from "./pages/NuestraPropuesta";
import Galeria from "./pages/Galeria";
import Admisiones from "./pages/Admisiones";
import Infraestructura from "./pages/Infraestructura";
import Video from "./pages/Video";
import Contacto from "./pages/Contacto"
import Feedback from "./pages/Feedback";
import { FaRegBell } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div id="content-container">
        {/* Header estático */}
        <header className="mb-4" style={{width:'100%'}}>
          <Navbar />
        </header>

        <Container>
          {/* Configuración de rutas con Routes en lugar de Switch */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/nuestrapropuesta" element={<NuestraPropuesta />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/infraestructura" element={<Infraestructura />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/feedback" element={<Feedback />} />
            
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </Container>

      </div>
        {/* Footer estático */}
        <footer className="full-width-footer p-3 mt-4" >
        {/*<footer className="full-width-footer p-3 mt-4" style={{ width: '100%', backgroundColor: 'red' }}*/}
          <p>Unidad Educativa Amerinst</p>
          <p>
            Av. 20 de octubre N°1928 | Teléfonos: 242 3046 – 242 3352 – 242 4121
          </p>
          <p>Casilla 1409</p>
          {/* Agrega enlaces y logos de redes sociales aquí */}
          <p>© 2023 Instituto Americano La Paz Bolivia</p>
        </footer>
    </Router>
  );
}

export default App;
