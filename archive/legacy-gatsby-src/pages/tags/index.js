import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link as RouterLink, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '../../components/atoms/Typography';
import List from '../../components/molecules/List';
import ListItem from '../../components/molecules/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
  list: {
    backgroundColor: 'transparent'
  }
}));

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  const classes = useStyles();

  return (
    <Layout>
      <Box>
        <Helmet title={`Tags | ${title}`} />
        <Box my={3}>
          <Typography variant='h5' gutterBottom bold>
            Tags
          </Typography>
          <List dense={true} className={classes.list}>
            {group.map(tag => (
              <ListItem key={tag.fieldValue}>
                <Link
                  component={RouterLink}
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  color='inherit'
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Layout>
  );
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
