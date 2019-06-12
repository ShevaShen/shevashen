import React from 'react';
import LanguageToggler from './LanguageToggler';
import { makeStyles } from '@material-ui/core/styles';
import atoms from './atoms';

const { Divider, Typography } = atoms;

const useStyles = makeStyles({
  conatiner: {
    padding: 15
  },
  divider: {
    marginBottom: 15
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.conatiner}>
      <LanguageToggler />
      <Divider className={classes.divider} />
      <Typography variant="body2">&copy; GreenFish Digital 2019</Typography>
    </footer>
  );
};

export default Footer;
