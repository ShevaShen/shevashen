import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Hidden from '@material-ui/core/Hidden';
import Search from '@material-ui/icons/Search';
import atoms from '../atoms';
import SideNav from './SideNav';

const { Divider, Toolbar } = atoms;

const Header = () => {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar narrow>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center">
              Sheva Shen
              <Divider vertical />
              UI/UX focused Front-end Developer
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs>
              <TextField
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Hidden>
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
