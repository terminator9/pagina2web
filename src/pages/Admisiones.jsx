import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaUserCheck,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Admisiones() {
  return (
    <Container>
      {/* Título y Descripción */}
      <Row className="my-3">
        <Col>
          <h2>Admisiones</h2>
          <p>
            Inscripciones para la gestión 2023 inician el 16 de enero en el
            Coliseo Rev. Francis Harrington.
          </p>
        </Col>
      </Row>

      {/* Calendario de Inscripciones */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Header>
              <FaCalendarAlt /> Calendario de Inscripciones
            </Card.Header>
            <ListGroup variant="flush">
              {/* Detalles del calendario aquí */}
              <ListGroup.Item>
                Lunes 16 - Viernes 20: Estudiantes nuevos, nivel inicial y
                primeros de primaria
              </ListGroup.Item>
              <ListGroup.Item>
                Lunes 23 - Viernes 27: Continuación de inscripciones por
                apellido
              </ListGroup.Item>
              <ListGroup.Item>
                Lunes 30 - Martes 31: Estudiantes Convenio Fiscal y Resagados
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Requisitos para Estudiantes Nuevos */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Header>
              <FaUserCheck /> Requisitos Estudiantes Nuevos
            </Card.Header>
            <ListGroup variant="flush">
              {/* Detalles de los requisitos aquí */}
              <ListGroup.Item>
                Certificado de nacimiento y CI, ambos original y fotocopia
              </ListGroup.Item>
              <ListGroup.Item>Certificado o carnet de vacunas</ListGroup.Item>
              <ListGroup.Item>
                Libreta Electrónica 2022 y fotocopia
              </ListGroup.Item>
              <ListGroup.Item>
                Fotocopia de CI de padre, madre o tutor
              </ListGroup.Item>
              <ListGroup.Item>
                Formulario RUDE llenado (disponible en el sitio web)
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Horario y Lugar de Atención */}
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Header>
              <FaClock /> Horario de Atención
            </Card.Header>
            <Card.Body>
              <p>Hrs. 08:30 a 16:00 (horario continuo)</p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <FaMapMarkerAlt /> Lugar de Atención
            </Card.Header>
            <Card.Body>
              <p>Coliseo “Rev. Francis M. Harrington” – Instituto Americano</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admisiones;
