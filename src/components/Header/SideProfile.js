import React from 'react';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import SocialLink from '../SocialLink';
import atoms from '../atoms';
import HeadshotImg from '../../../static/img/headshot.jpg';

const { Avatar, Typography } = atoms;

const SideProfile = () => {
  return (
    <Box
      mx={2}
      my={3}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Avatar medium alt='Sheva Shen' src={HeadshotImg} />
      <Box mt={1} display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h6'>Sheva Shen</Typography>
        <Typography variant='caption'>
          UI/UX focused Front-end Developer
        </Typography>
      </Box>
      <Box mt={1} display='flex' alignItems='center'>
        <SocialLink
          label='Linkedin'
          link='https://www.linkedin.com/in/shevashen/'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink label='Github' link='https://github.com/ShevaShen'>
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink
          label='Instagram'
          link='https://www.instagram.com/shevashen/'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
      </Box>
    </Box>
  );
};

export default SideProfile;
