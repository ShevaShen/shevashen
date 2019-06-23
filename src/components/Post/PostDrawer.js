import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../atoms/Button';
import Drawer from '../molecules/Drawer';
import PostContent from './PostContent';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '100%'
  }
}));

const PostDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button edge='start' onClick={() => setIsOpen(true)}>
        Learn more
      </Button>
      <Drawer
        classes={{ paper: classes.drawer }}
        anchor='right'
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
          <PostContent />
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default PostDrawer;
