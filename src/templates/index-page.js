import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import BlogRoll from '../components/BlogRoll';

import Grid from '@material-ui/core/Grid';
import molecules from '../components/molecules';
import Box from '@material-ui/core/Box';

const { Tabs, Tab } = molecules;

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  description
}) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <React.Fragment>
      <Box component="main" maxWidth={935} margin="auto" padding="60px 20px 0">
        <Box mb="44px">
          <Hero />
        </Box>
        <Tabs
          value={tabIndex}
          centered
          onChange={(event, value) => {
            setTabIndex(value);
          }}
        >
          <Tab label="Posts" />
          <Tab label="IGTV" />
          <Tab label="Saved" />
          <Tab label="Tagged" />
        </Tabs>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <img
              alt="post"
              style={{ width: '100%' }}
              src="https://via.placeholder.com/500/f5f5f5"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="post"
              style={{ width: '100%' }}
              src="https://via.placeholder.com/500/f5f5f5"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="post"
              style={{ width: '100%' }}
              src="https://via.placeholder.com/500/f5f5f5"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
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
        title
        heading
        subheading
        description
      }
    }
  }
`;
