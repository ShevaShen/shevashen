import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../atoms';
import theme from '../../theme/instapaper/theme';

import SocialLink from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const { Avatar, Typography } = atoms;

const useStyles = makeStyles({
  editButton: {
    marginLeft: 0,
    marginTop: 12,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
      marginTop: 0
    }
  }
});

const Hero = props => {
  const { title, heading, description } = props;

  const classes = useStyles();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });

  return (
    <Grid container>
      <Grid item xs={4}>
        <Avatar
          ultraLarge={upSm}
          medium={!upSm}
          style={{ margin: 'auto' }}
          alt="My profile"
          src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"
        />
      </Grid>
      <Grid item xs={8}>
        <Box clone mb="20px">
          <Grid container alignItems="center">
            <Typography component="h1" variant="h4" lightWeight>
              siriwatknp
            </Typography>
            <Button
              className={classes.editButton}
              variant="outlined"
              fullWidth={!upSm}
            >
              Edit Profile
            </Button>
          </Grid>
        </Box>
        <Box mb="20px">
          <Grid container spacing={5}>
            <Grid item>
              <Typography variant="subtitle1">
                <b>132</b> posts
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <b>325</b> followers
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <b>260</b> following
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="subtitle1" bold>
          Siriwat Kunaporn
        </Typography>
        <Typography variant="subtitle1">Bangkok Christian College</Typography>
        <Typography variant="subtitle1">CU intania 96.</Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
