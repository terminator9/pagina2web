import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Feedback() {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams({ email, comment }).toString();
    window.location.href = `/submit-feedback?${queryParams}`;
  };

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Feedback</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Dirección de correo electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Ingrese su correo" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicComment">
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Déjenos sus comentarios o sugerencias"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar Feedback
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
