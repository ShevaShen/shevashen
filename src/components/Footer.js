import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LanguageToggler from './LanguageToggler';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom border-top text-600 py-3 text-sans-serif text-center overflow-hidden bg-white">
        <Container>
          <Row>
            <Col className="d-flex flex-column flex-md-row justify-content-start align-items-center">
              <LanguageToggler />
              <p className="fs--1 text-uppercase ls font-weight-bold mb-0 mt-2 mt-md-0 ml-0 ml-md-5">
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
