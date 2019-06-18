import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import molecules from '../molecules';
import Box from '@material-ui/core/Box';
import TabCard from './TabCard';

const { Tabs, Tab } = molecules;

const TabsContent = props => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabIndex);

  return (
    <Box>
      <Tabs
        value={tabIndex}
        centered
        onChange={(event, value) => {
          setTabIndex(value);
        }}
      >
        <Tab label='Featured' />
        <Tab label='Stories' />
        <Tab label='Works' />
        <Tab label='Clients' />
      </Tabs>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <TabCard />
        </Grid>
        <Grid item sm={4}>
          <img
            alt='post'
            style={{ width: '100%' }}
            src='https://via.placeholder.com/500/f5f5f5'
          />
        </Grid>
        <Grid item sm={4}>
          <img
            alt='post'
            style={{ width: '100%' }}
            src='https://via.placeholder.com/500/f5f5f5'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TabsContent;
