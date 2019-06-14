import React from 'react';
import Grid from '@material-ui/core/Grid';
import atoms from '../atoms';

const { Typography } = atoms;

const Hero = props => {
  const { title, heading, subheading, description } = props;

  return (
    <Grid container>
      <Typography variant='h1' bold display='block'>
        {title}
      </Typography>
      <Typography variant='h4' display='block'>
        {heading}
      </Typography>
      <Typography variant='h5' display='block'>
        {subheading}
      </Typography>
      <Typography variant='h6' display='block'>
        {description}
      </Typography>
    </Grid>
  );
};

export default Hero;
