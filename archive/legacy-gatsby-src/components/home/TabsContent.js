import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import molecules from '../molecules';
import Box from '@material-ui/core/Box';
import TabCard from './TabCard';
import { tabsData, renderTabFallbackContent } from './TabsData';
import { selectedLanguage, pathPrefix } from '../LanguageToggler';

const { Tabs, Tab } = molecules;

const TabsContent = props => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const { currentTab } = props;

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (currentTab) {
      const currentTabData = tabsData.find(tab => tab.value === currentTab);
      setTabIndex(currentTabData.index);
    }
  }, [currentTab]);

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

  const currentLang = selectedLanguage();

  const filteredPosts = posts.filter(
    ({ node: post }) => post.fields.langKey === currentLang
  );

  const currentTabPosts = filteredPosts
    ? filterTabContent(tabIndex, filteredPosts)
    : [];

  return (
    <Box>
      <Tabs
        value={tabIndex}
        centered
        onChange={(event, value) => {
          setTabIndex(value);
          navigate(`${pathPrefix()}/#${tabsData[value].value}`);
        }}
      >
        {tabsData.map(tab => (
          <Tab label={tab.label} key={`home_tab_${tab.value}`} />
        ))}
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

export default props => (
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
    render={(data, count) => (
      <TabsContent data={data} count={count} {...props} />
    )}
  />
);
