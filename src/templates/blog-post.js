import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import atoms from '../components/atoms';

const useStyles = makeStyles(theme => ({
  tagButton: {
    marginRight: theme.spacing(1)
  }
}));

const { Typography, Button } = atoms;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  const classes = useStyles();

  return (
    <Box>
      {helmet || ''}
      <Box my={3}>
        <Typography variant='h3' component='h1'>
          {title}
        </Typography>
        <Typography variant='caption' gutterBottom>
          {description}
        </Typography>
      </Box>
      <Box fontSize='body1' mb={6}>
        <PostContent content={content} />
      </Box>
      <Box mb={3}>
        {tags.map(tag => (
          <Button
            key={`tag_${tag}`}
            component={Link}
            to={`/tags/${kebabCase(tag)}/`}
            size='small'
            variant='outlined'
            className={classes.tagButton}
          >
            {tag}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
