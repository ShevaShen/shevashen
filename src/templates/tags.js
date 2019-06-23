import React from 'react';
import Helmet from 'react-helmet';
import { Link as RouterLink, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';
import List from '../components/molecules/List';
import ListItem from '../components/molecules/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: 'transparent'
  },
  linkWrapper: {
    padding: theme.spacing(1, 2)
  }
}));

const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;
  const classes = useStyles();

  return (
    <Layout>
      <Box>
        <Helmet title={`${tag} | ${title}`} />
        <Box mt={3}>
          <Typography variant='h5' gutterBottom bold>
            {tagHeader}
          </Typography>
          <Box mb={3}>
            <List dense={true} className={classes.list}>
              {posts.map(post => (
                <ListItem key={post.node.fields.slug}>
                  <Paper className={classes.linkWrapper}>
                    <Link
                      component={RouterLink}
                      to={post.node.fields.slug}
                      color='inherit'
                    >
                      <Typography variant='body1' bold>
                        {post.node.frontmatter.title}
                      </Typography>
                      <Typography variant='caption'>
                        {post.node.frontmatter.date}
                      </Typography>
                    </Link>
                  </Paper>
                </ListItem>
              ))}
            </List>
          </Box>
          <Button component={RouterLink} to='/tags' variant='outlined'>
            Browse all tags
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
