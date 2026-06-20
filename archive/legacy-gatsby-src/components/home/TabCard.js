import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import molecules from '../molecules';
import atoms from '../atoms';
import PlaceholderImg from '../../../static/img/placeholder.jpg';
// import PostDrawer from '../Post/PostDrawer';
import Button from '../atoms/Button';

const { Card, CardActionArea, CardActions, CardContent, CardMedia } = molecules;
const { Typography } = atoms;

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    height: 180
  },
  title: {
    lineHeight: '1.4'
  }
});

const TabCard = props => {
  const classes = useStyles();
  const { title, excerpt, headerImg, link } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={link}>
        <CardMedia
          className={classes.media}
          image={
            headerImg ? headerImg.childImageSharp.fluid.src : PlaceholderImg
          }
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            component='h3'
            bold
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={link}>
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export default TabCard;
