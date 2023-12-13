import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Importación de imágenes (ajustar rutas según sea necesario)
import evaluacionesCalidadImg from "../assets/img/evaluacionesCalidad.jpeg";
import academiaSaberImg from "../assets/img/academiaSaber.png";
import desfileCivicoImg from "../assets/img/desfile2021.jpg";

function Noticias() {
  return (
    <Container>
      {/* Noticia 3 */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={desfileCivicoImg} />
            <Card.Body>
              <Card.Title>Homenaje al Grito Libertario</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                24 de julio, 2023
              </Card.Subtitle>
              <Card.Text>
                Conmemoración del Grito Libertario de Nuestra Señora de La Paz
                con un emotivo desfile cívico, reforzando los valores de
                libertad y democracia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Noticia 1 */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={evaluacionesCalidadImg} />
            <Card.Body>
              <Card.Title>Evaluaciones de Calidad Semestral</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                30 de junio, 2023
              </Card.Subtitle>
              <Card.Text>
                Evaluaciones semestrales realizadas en asignaturas clave para
                primaria y secundaria, enfocadas en medir el progreso y la
                efectividad de la enseñanza.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Noticia 2 */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Img variant="top" src={academiaSaberImg} />
            <Card.Body>
              <Card.Title>Academia del Saber</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                16 de junio, 2023
              </Card.Subtitle>
              <Card.Text>
                Nuestra estudiante Noelia Adriana Enriquez Alvarez destaca en el
                programa “Academia del Saber”, un hito educativo nacional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Noticias;
