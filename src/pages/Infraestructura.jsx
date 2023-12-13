import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSchool, FaChild, FaBookReader } from "react-icons/fa";

// Importación de imágenes (ajustar rutas según sea necesario)
import imagenSecundario from "../assets/img/aulas-secundaria.jpg";
import imagenInicial from "../assets/img/jardin-kids.jpg";
import imagenPrimario from "../assets/img/aulas-primaria.jpg";

function Infraestructura() {
  return (
    <Container>
      {/* Nivel Secundario */}
      <Row className="my-3 align-items-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <FaSchool size={30} className="mb-3" />
              <Card.Title>Nivel Secundario - Mañana y Tarde</Card.Title>
              <Card.Text>
                Aprendizaje práctico y trabajo colaborativo en proyectos.
                Herramientas digitales para autonomía y flexibilidad del
                estudiante. Formación en Bachillerato Técnico Humanístico y
                énfasis en hábitos de respeto, disciplina y responsabilidad
                social.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img
            src={imagenSecundario}
            alt="Nivel Secundario"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Nivel Inicial */}
      <Row className="my-3 align-items-center">
        <Col md={6}>
          <img src={imagenInicial} alt="Nivel Inicial" className="img-fluid" />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <FaChild size={30} className="mb-3" />
              <Card.Title>Nivel Inicial - Mañana y Tarde</Card.Title>
              <Card.Text>
                Fomentamos capacidades de comunicación, razonamiento, desarrollo
                personal y expresión artística desde temprana edad. Aprendizaje
                bilingüe en grupos reducidos, con un enfoque en la exploración,
                socialización y seguridad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Nivel Primario */}
      <Row className="my-3 align-items-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <FaBookReader size={30} className="mb-3" />
              <Card.Title>Nivel Primario - Mañana y Tarde</Card.Title>
              <Card.Text>
                Propuesta educativa que enfatiza la integridad personal y
                valores atemporales. El aprendizaje es bilingüe, innovador y
                práctico, alineado con las mejores prácticas educativas
                globales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img
            src={imagenPrimario}
            alt="Nivel Primario"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Infraestructura;
