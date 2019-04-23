import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Container, Row, Col } from 'reactstrap';
import Gallery from '../components/portfolio/Gallery';

export const PortfolioPageTemplate = ({
  title,
  heading,
  subheading,
  description
}) => (
  <section>
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
          <h3>{heading}</h3>
          <h5>{subheading}</h5>
          <p>{description}</p>
          <Gallery />
        </Col>
      </Row>
    </Container>
  </section>
);

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string
};

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PortfolioPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "portfolio-page" } }) {
      frontmatter {
        title
        heading
        subheading
        description
      }
    }
  }
`;
