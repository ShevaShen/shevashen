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
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PlaceholderImg from '../../static/img/placeholder.jpg';
import PostMetaData from '../components/Post/PostMetaData';

const useStyles = makeStyles(theme => ({
  headerImg: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(2)
  },
  tagButton: {
    marginRight: theme.spacing(1)
  }
}));

const { Typography, Button } = atoms;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  excerpt,
  headerImg,
  isFeatured,
  category,
  date,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  const classes = useStyles();
  const imageInfo = headerImg
    ? {
        alt: title,
        image: headerImg,
        className: classes.headerImg
      }
    : {
        alt: 'placeholder',
        image: PlaceholderImg,
        className: classes.headerImg
      };

  return (
    <Box>
      {helmet || ''}
      <PreviewCompatibleImage imageInfo={imageInfo} />
      <Box my={3}>
        <Typography variant='h3' component='h1' display='block'>
          {title}
        </Typography>
        <PostMetaData isFeatured={isFeatured} category={category} date={date} />
      </Box>
      <Box fontSize='body1' mt={3} mb={6}>
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
  date: PropTypes.string,
  excerpt: PropTypes.string,
  headerImg: PropTypes.object,
  isFeatured: PropTypes.bool,
  category: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const {
    date,
    excerpt,
    headerImage,
    isFeatured,
    category,
    tags,
    title
  } = post.frontmatter;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={date}
        excerpt={excerpt}
        headerImg={headerImage}
        isFeatured={isFeatured}
        category={category}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${title}`}</title>
            <meta name='description' content={`${excerpt}`} />
          </Helmet>
        }
        tags={tags}
        title={title}
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
        excerpt
        headerImage {
          childImageSharp {
            fluid(maxWidth: 896, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        isFeatured
        category
        tags
      }
    }
  }
`;
