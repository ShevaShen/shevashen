import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom bg-black text-600 py-4 text-sans-serif text-center overflow-hidden">
        <Container>
          <Row>
            <Col>
              <p className="fs--1 text-uppercase ls font-weight-bold mb-0">
                Copyright &copy; 2019 GreenFish Digital
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
};

export default Footer;
