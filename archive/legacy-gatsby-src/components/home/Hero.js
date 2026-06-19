import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../atoms';

const { Typography } = atoms;

const Hero = props => {
  const { title1, title2, description } = props;

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box>
      <Typography variant={smUp ? 'h1' : 'h3'} component='h1' bold>
        {title1}
      </Typography>
      <Typography variant={smUp ? 'h1' : 'h3'} component='h1' bold gutterBottom>
        {title2}
      </Typography>
      <Typography variant='body1' paragraph={true} gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

export default Hero;
