import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import TabsContent from '../components/home/TabsContent';
import BlogRoll from '../components/BlogRoll';
import Box from '@material-ui/core/Box';
import atoms from '../components/atoms';

const { Typography } = atoms;

export const IndexPageTemplate = ({ title1, title2, description }) => {
  return (
    <Layout>
      <Box my={6}>
        <Hero title1={title1} title2={title2} description={description} />
      </Box>
      <Typography variant='h5' color='primary' bold>
        I am currently updating my site, stay tuned!
      </Typography>
      {/* <TabsContent /> */}
    </Layout>
  );
};

IndexPageTemplate.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title1={frontmatter.title1}
      title2={frontmatter.title2}
      description={frontmatter.description}
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
