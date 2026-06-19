import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const SocialLink = props => {
  const { label, link, children } = props;
  return (
    <IconButton
      aria-label={label}
      component='a'
      href={link}
      target='_blank'
      rel='noreferrer noopener'
      size='small'
    >
      {children}
    </IconButton>
  );
};

export default SocialLink;
