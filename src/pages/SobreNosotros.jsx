import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// Importación de imágenes
import edificioComercio from "../assets/img/aulas-secundaria2.jpg";
import estudiantesFrontis from "../assets/img/puerta-entrada-escuela.jpg";
import laboratorio from "../assets/img/aula-quimica2.jpg";

function SobreNosotros() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>¿Quiénes Somos?</h2>
          <Image src={edificioComercio} alt="Edificio Comercio" fluid />
          <p>
            Iniciamos como Instituto Americano, La Paz en 1907, destacando por
            nuestra trayectoria de casi 115 años. Evolucionamos continuamente
            para adaptarnos al mundo actual, fomentando habilidades,
            conocimientos y valores en nuestros estudiantes para su éxito en la
            sociedad moderna.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Tradición y Experiencia</h3>
          <Image
            src={estudiantesFrontis}
            alt="Estudiantes en el Frontis"
            fluid
          />
          <p>
            Nuestra institución se enorgullece de tener una historia rica en
            tradición y experiencia, impulsando la educación de calidad y
            accesible para todos en nuestra ciudad.
          </p>
        </Col>
        <Col md={6}>
          <h3>Formación Integral</h3>
          <Image src={laboratorio} alt="Laboratorio" fluid />
          <p>
            Ofrecemos una formación integral que abarca distintas áreas del
            desarrollo humano. Con un ambiente enriquecedor, nuestros
            estudiantes alcanzan su máximo potencial, preparándolos para los
            desafíos del futuro.
          </p>
        </Col>
      </Row>
      {/* Agregar más contenido aquí según sea necesario */}
    </Container>
  );
}

export default SobreNosotros;
