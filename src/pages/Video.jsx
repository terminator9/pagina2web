import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Video() {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>BANDA 2023 INSTITUTO AMERICANO</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">23 mar 2023</Card.Subtitle>
              <Card.Text>
                ASISTENCIA DE LA BANDA DEL INSTITUTO AMERICANO AL DESFILE CIVICO EN CONMEMORACION A LA GUERRA DEL PACIFICO
              </Card.Text>
              <div className="video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/jfzfmNUTDS0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
