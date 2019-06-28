import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import atoms from '../atoms';
import SideNav from './SideNav';
import LanguageToggler from '../LanguageToggler';

const { Toolbar } = atoms;

const Header = () => {
  return (
    <AppBar position='sticky' color='default' elevation={0}>
      <Toolbar narrow>
        <Grid container justify='space-between' alignItems='center'>
          <SideNav />
          <LanguageToggler />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
