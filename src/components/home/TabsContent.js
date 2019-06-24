import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import molecules from '../molecules';
import Box from '@material-ui/core/Box';
import TabCard from './TabCard';

const { Tabs, Tab } = molecules;

const TabsContent = props => {
  const [tabIndex, setTabIndex] = useState(0);
  const { edges: posts } = props.data.allMarkdownRemark;

  const renderTabContent = index => {
    switch (index) {
      case 0:
        return (
          // <Grid item sm={4}>
          //   {posts &&
          //     posts.map(({ node: post }) => (
          //       <TabCard
          //         key={post.id}
          //         headerImg={post.frontmatter.headerImage}
          //         title={post.frontmatter.title}
          //         excerpt={post.frontmatter.excerpt}
          //         link={post.fields.slug}
          //       />
          //     ))}
          // </Grid>
          <Grid item>
            Since the other three tabs are empty, this one is empty too :P
          </Grid>
        );
      case 1:
        return (
          <Grid item>There is no Story at the monent, check back later?</Grid>
        );
      case 2:
        return (
          <Grid item>
            I am working on my portfolio at the monent, check back later?
          </Grid>
        );
      case 3:
        return (
          <Grid item>
            There are too many clients I've worked with, trying to organize them
            in a better way :P, check back later?
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Tabs
        value={tabIndex}
        centered
        onChange={(event, value) => {
          setTabIndex(value);
        }}
      >
        <Tab label='Featured' />
        <Tab label='Stories' />
        <Tab label='Works' />
        <Tab label='Clients' />
      </Tabs>
      <Grid container spacing={4}>
        {renderTabContent(tabIndex)}
      </Grid>
    </Box>
  );
};

TabsContent.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query TabsContentQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
                langKey
              }
              frontmatter {
                title
                templateKey
                excerpt
                headerImage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TabsContent data={data} count={count} />}
  />
);
