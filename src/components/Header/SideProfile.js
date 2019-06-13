import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import atoms from '../atoms';
import theme from '../../theme/instapaper/theme';

const { Avatar, Divider, Typography } = atoms;

const SideProfile = () => {
  const upSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });

  return (
    <Box m={2}>
      <Avatar
        ultraLarge={upSm}
        medium={!upSm}
        style={{ margin: 'auto' }}
        alt="My profile"
        src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"
      />
      <Typography variant="h6">Sheva Shen</Typography>
      <Divider />
      UI/UX focused Front-end Developer
    </Box>
  );
};

export default SideProfile;
