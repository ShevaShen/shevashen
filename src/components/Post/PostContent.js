import React from 'react';
import Container from '@material-ui/core/Container';
import atoms from '../atoms';
import PlaceholderImg from '../../../static/img/portfolio-placeholder.jpg';

const { Typography, Button } = atoms;

const PostContent = props => {
  return (
    <Container maxWidth='md'>
      <Typography>post content here</Typography>
    </Container>
  );
};

export default PostContent;
