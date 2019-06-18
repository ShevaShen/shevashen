import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import molecules from '../molecules';
import atoms from '../atoms';
import PlaceholderImg from '../../../static/img/portfolio-placeholder.jpg';

const { Card, CardActionArea, CardActions, CardContent, CardMedia } = molecules;
const { Typography, Button } = atoms;

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

const TabCard = props => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea component={Link} to='/'>
        <CardMedia
          className={classes.media}
          image={PlaceholderImg}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to='/' size='small'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default TabCard;
