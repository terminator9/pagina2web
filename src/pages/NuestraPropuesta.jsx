import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaHeartbeat,
  FaLanguage,
} from "react-icons/fa";

// Importación de imágenes (ajustar rutas según sea necesario)
import introImage from "../assets/img/concentracion-de-estudiantes-exterior.jpg";
import nivelInicialImg from "../assets/img/parque-kids.jpg";
import nivelPrimarioImg from "../assets/img/aulas-primaria.jpg";
import nivelSecundarioImg from "../assets/img/aulas-secundaria2.jpg";

function NuestraPropuesta() {
  return (
    <Container>
      {/* Introducción */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={introImage} />
            <Card.Body>
              <Card.Title>Educamos para Transformar el Mundo</Card.Title>
              <Card.Text>
                Con 115 años de tradición y evolución continua, el Amerinst se
                compromete a formar estudiantes exitosos con habilidades,
                conocimientos y valores para el mundo actual.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Formación Integral */}
      <Row className="my-3">
        <Col>
          <h3>Formación Integral</h3>
          <p>
            Más allá de las aulas, nuestro colegio promueve la diversidad de
            actividades para el descubrimiento y aplicación de talentos
            estudiantiles.
          </p>
        </Col>
      </Row>

      {/* Nuestros ejes */}
      <Row className="my-3 text-center">
        {/* Aprendizaje orientado a proyectos */}
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <FaProjectDiagram size={50} className="mb-3" />
              <Card.Title>Aprendizaje orientado a proyectos</Card.Title>
              <Card.Text>
                Fomentamos el aprendizaje práctico mediante proyectos que
                estimulan la creatividad y la solución de problemas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Habilidades digitales tecnológicas */}
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <FaLaptopCode size={50} className="mb-3" />
              <Card.Title>Habilidades digitales tecnológicas</Card.Title>
              <Card.Text>
                Impartimos habilidades tecnológicas esenciales para preparar a
                los estudiantes para el futuro digital.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Educación socioemocional */}
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <FaHeartbeat size={50} className="mb-3" />
              <Card.Title>Educación socioemocional</Card.Title>
              <Card.Text>
                Promovemos el desarrollo emocional y social para formar
                individuos empáticos y conscientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bilingüismo */}
        <Col md={3}>
          <Card className="h-100">
            <Card.Body>
              <FaLanguage size={50} className="mb-3" />
              <Card.Title>Bilingüismo</Card.Title>
              <Card.Text>
                Nuestra educación bilingüe prepara a los estudiantes para un
                mundo globalizado e interconectado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Niveles Educativos */}
      <Row className="my-3">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={nivelInicialImg} />
            <Card.Body>
              <Card.Title>Nivel Inicial</Card.Title>
              <Button variant="primary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={nivelPrimarioImg} />
            <Card.Body>
              <Card.Title>Nivel Primario</Card.Title>
              <Button variant="primary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={nivelSecundarioImg} />
            <Card.Body>
              <Card.Title>Nivel Secundario</Card.Title>
              <Button variant="primary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NuestraPropuesta;
