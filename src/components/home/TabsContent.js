import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import molecules from '../molecules';
import Box from '@material-ui/core/Box';
import TabCard from './TabCard';

const { Tabs, Tab } = molecules;

const TabsContent = props => {
  const [tabIndex, setTabIndex] = useState(0);
  const { edges: posts } = props.data.allMarkdownRemark;

  const filterTabContent = (index, posts) => {
    switch (index) {
      case 0:
        return posts.filter(({ node: post }) => post.frontmatter.isFeatured);
      case 1:
        return posts.filter(
          ({ node: post }) => post.frontmatter.category === 'story'
        );
      case 2:
        return posts.filter(
          ({ node: post }) => post.frontmatter.category === 'work'
        );
      default:
        return [];
    }
  };

  const renderTabFallbackContent = index => {
    switch (index) {
      case 0:
        return 'Since the other three tabs are empty, this one is empty too :P';
      case 1:
        return 'There is no Story at the monent, check back later?';
      case 2:
        return 'I am working on my portfolio at the monent, check back later?';
      case 3:
        return "There are too many clients I've worked with, trying to organize them in a better way :P, check back later";
      default:
        return null;
    }
  };

  const currentTabPosts = posts ? filterTabContent(tabIndex, posts) : [];

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
        {currentTabPosts.length > 0 ? (
          currentTabPosts.map(({ node: post }) => {
            const { headerImage, title, excerpt } = post.frontmatter;

            return (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <TabCard
                  headerImg={headerImage}
                  title={title}
                  excerpt={excerpt}
                  link={post.fields.slug}
                />
              </Grid>
            );
          })
        ) : (
          <Grid item>{renderTabFallbackContent(tabIndex)}</Grid>
        )}
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

// currently, the static query will only query the english version
export default () => (
  <StaticQuery
    query={graphql`
      query TabsContentQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { templateKey: { eq: "blog-post" } }
            fields: { langKey: { eq: "en" } }
          }
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
                isFeatured
                category
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
