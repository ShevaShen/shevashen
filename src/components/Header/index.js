import React from 'react';
import { Link as RouterLink } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import atoms from '../atoms';
import SideNav from './SideNav';

const { Divider, Toolbar, Typography, Button } = atoms;

const Header = () => {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar narrow>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center">
              <Button component={RouterLink} to="/">
                <Typography variant="h6">Sheva Shen</Typography>
              </Button>
              <Divider vertical />
              UI/UX focused Front-end Developer
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="flex-end">
              <SideNav />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
