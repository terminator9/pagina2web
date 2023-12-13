import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Importación de imágenes (ajustar rutas según sea necesario)
import img1 from "../assets/img/estatua.jpg";
import img2 from "../assets/img/cancha4.jpg";
import img3 from "../assets/img/cancha3.jpg";
import img4 from "../assets/img/cancha2.jpg";
import img5 from "../assets/img/cancha.jpg";
import img6 from "../assets/img/aula-quimica.jpg";
import img7 from "../assets/img/aula-computacion3.jpg";
import img8 from "../assets/img/aulas-primaria.jpg";

function Galeria() {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2>Nuestro Colegio</h2>
          <p>
            Nuestro colegio cuenta con amplias instalaciones, ofreciendo un
            entorno enriquecedor y espacioso para diversas áreas de la
            educación.
          </p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
        {/* Imágenes del colegio */}
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
          <Col key={index}>
            <div className="gallery-image-container">
              <img
                src={img}
                alt={`Colegio imagen ${index + 1}`}
                className="img-fluid"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Galeria;
