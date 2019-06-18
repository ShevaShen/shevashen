import React from 'react';
import Box from '@material-ui/core/Box';
import Layout from '../../components/Layout';
import atoms from '../../components/atoms';

const { Typography } = atoms;

export default () => (
  <Layout>
    <Box my={4}>
      <Typography variant='h5' component='h1' gutterBottom>
        Thank you for your message! I will get back to you ASAP!
      </Typography>
    </Box>
  </Layout>
);
