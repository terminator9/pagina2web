import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

// Importar imágenes (ajustar las rutas según sea necesario)
import img1 from "../assets/img/puerta-entrada-escuela.jpg";
import img2 from "../assets/img/isa-de-bandera.jpg";
import img3 from "../assets/img/imagen-de-cancha.jpg";
import img4 from "../assets/img/desfile2021.jpg";
import img5 from "../assets/img/aula-quimica3.jpg";
import img6 from "../assets/img/historia.jpg";
import aboutUsImage from "../assets/img/historia2.jpg";
import educationalModelImage from "../assets/img/desfile2021-2.jpg";
import focusImage from "../assets/img/concentracion-de-estudiantes-exterior.jpg";
import "./Home.css"
function Home() {
  return (
    <div className="TodoAncho">
      <div className="tittle">
        <h1>UNIDAD EDUCATIVA AMERINST</h1>
      </div>
      
        {/* Carrusel */}
        <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="Sixth slide" />
          </Carousel.Item>
        </Carousel>
        </Container>
      
      <div className="row justify-content-center">
        <div className=" col-md-7 cuerpo">
          {/* Bloque de contenido debajo del carrusel */}
          <Container className="mt-4">
            <Row>
              <Col>
                <h2></h2>
                <img className="d-block w-100" src={aboutUsImage} alt="About Us" />
                <p>
                  Forjando los líderes del futuro con 116 años al servicio de la
                  Educación Boliviana.
                </p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <h3>Modelo Educativo</h3>
                <img
                  className="d-block w-100"
                  src={educationalModelImage}
                  alt="Educational Model"
                />
                <p>
                  Educación Técnica Humanista Integral enfocada en el SER y el
                  HACER.
                </p>
              </Col>
              <Col md={6}>
                <h3>Enfoque</h3>
                <img className="d-block w-100" src={focusImage} alt="Focus" />
                <p>Enfoque socioproductivo con componente digital y tecnológico.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
