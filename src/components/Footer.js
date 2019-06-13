import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import atoms from './atoms';

const { Divider, Typography } = atoms;

const useStyles = makeStyles({
  divider: {
    marginTop: 32,
    marginBottom: 16
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer">
      <Container maxWidth="md">
        <Divider className={classes.divider} />
        <Typography variant="body2">&copy; GreenFish Digital 2019</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
