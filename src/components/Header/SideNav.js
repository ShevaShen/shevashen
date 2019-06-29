import React, { useState } from 'react';
import { Link as RouterLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideProfile from './SideProfile';
import Divider from '../atoms/Divider';
import molecules from '../molecules';
import { pathPrefix } from '../LanguageToggler';

const { List, ListItem, ListItemText } = molecules;

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const navData = [
  {
    label: 'home',
    path: '/'
  },
  {
    label: 'contact',
    path: '/contact'
  }
];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={() => setIsOpen(false)}
      onKeyDown={() => setIsOpen(false)}
    >
      <List>
        {navData.map(item => (
          <ListItem
            button
            to={`${pathPrefix()}${item.path}`}
            component={RouterLink}
            key={item.label}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton edge='start' onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <SideProfile />
        <Divider />
        {sideList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default SideNav;
