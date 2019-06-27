import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import TabsContent from '../components/home/TabsContent';

import Box from '@material-ui/core/Box';

export const IndexPageTemplate = ({
  title1,
  title2,
  description,
  location
}) => {
  const hash = location.hash.replace('#', '');

  return (
    <Layout>
      <Box my={6}>
        <Hero title1={title1} title2={title2} description={description} />
      </Box>
      <TabsContent currentTab={hash} />
    </Layout>
  );
};

IndexPageTemplate.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title1={frontmatter.title1}
      title2={frontmatter.title2}
      description={frontmatter.description}
      location={location}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } }
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      fields {
        langKey
      }
      frontmatter {
        title1
        title2
        description
      }
    }
  }
`;
