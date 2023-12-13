import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaIdCard, FaUniversity, FaPhone, FaCode } from 'react-icons/fa';

function Contacto() {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaUser /> Omar Fabio Marca Castillo</Card.Title>
              <Card.Text>
                <FaIdCard /> Carnet de Identidad: 9929937
              </Card.Text>
              <Card.Text>
                <FaUniversity /> Carrera: Informática
              </Card.Text>
              <Card.Text>
                <FaCode /> Materia: Programación Web 2
              </Card.Text>
              <Card.Text>
                <FaPhone /> Número de teléfono: 67326028
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
