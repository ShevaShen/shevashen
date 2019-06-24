import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Box from '@material-ui/core/Box';
import IconCategory from '@material-ui/icons/Category';
import IconDate from '@material-ui/icons/DateRange';
import IconFeatured from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(0.5, 0),
    marginRight: theme.spacing(1),
    fontSize: '0.75rem',
    color: grey[500]
  },
  buttonIcon: {
    fontSize: '1rem',
    marginRight: theme.spacing(0.5)
  }
}));

const PostMetaData = props => {
  const { isFeatured, category, date } = props;
  const classes = useStyles();

  return (
    <Box mt={1}>
      <Typography variant='caption' display='block'>
        {isFeatured && (
          <Button className={classes.button} component={Link} to='/#featured'>
            <IconFeatured className={classes.buttonIcon} />
            featured
          </Button>
        )}
        <Button
          className={classes.button}
          component={Link}
          to={`/#${category}`}
        >
          <IconCategory className={classes.buttonIcon} />
          {category}
        </Button>
        <Button className={classes.button} disabled>
          <IconDate className={classes.buttonIcon} />
          {date}
        </Button>
      </Typography>
    </Box>
  );
};

PostMetaData.propTypes = {
  isFeatured: PropTypes.bool,
  category: PropTypes.string,
  date: PropTypes.string
};

export default PostMetaData;
