import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

export const HTMLContent = ({ content, className }) => (
  <Box
    fontSize='body1'
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content, className }) => (
  <Box fontSize='body1' className={className}>
    {content}
  </Box>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
