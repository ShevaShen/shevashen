import React, { useState } from 'react';
import { Link as RouterLink } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SideProfile from './SideProfile';
import Divider from '../atoms/Divider';

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
            to={item.path}
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
