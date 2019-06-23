import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import atoms from '../atoms';
import PlaceholderImg from '../../../static/img/portfolio-placeholder.jpg';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const useStyles = makeStyles(theme => ({
  headerImg: {
    width: '100%',
    height: 'auto'
  },
  tagButton: {
    marginRight: theme.spacing(1)
  }
}));

const { Typography, Button } = atoms;

const tags = [
  {
    label: 'tag 1'
  },
  {
    label: 'tag 2'
  }
];

const PostContent = props => {
  const classes = useStyles();
  const imageInfo = {
    alt: 'placeholder',
    image: PlaceholderImg,
    className: classes.headerImg
  };

  return (
    <Container maxWidth='md'>
      <PreviewCompatibleImage imageInfo={imageInfo} />
      <Box mt={2} mb={3}>
        <Typography variant='h3' component='h1'>
          Post Title
        </Typography>
        <Typography variant='caption' gutterBottom>
          created time and other metadata
        </Typography>
      </Box>
      <Box mb={6}>
        <Typography variant='body1' gutterBottom>
          post content here
        </Typography>
      </Box>
      <Box mb={3}>
        {tags.map((tag, index) => (
          <Button
            key={`post_tag_${index}`}
            size='small'
            variant='outlined'
            className={classes.tagButton}
          >
            {tag.label}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default PostContent;
