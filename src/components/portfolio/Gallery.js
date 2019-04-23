import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PortfolioItem from './PortfolioItem';

const Gallery = props => {
  return (
    <Row>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
      <Col md={6} lg={4} xl={3}>
        <PortfolioItem />
      </Col>
    </Row>
  );
};

export default Gallery;
