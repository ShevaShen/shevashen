import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import molecules from '../molecules';
import Box from '@material-ui/core/Box';
import TabCard from './TabCard';

const { Tabs, Tab } = molecules;

const TabsContent = props => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderTabContent = index => {
    switch (index) {
      case 0:
        return (
          <Grid item sm={4}>
            <TabCard />
          </Grid>
        );
      case 1:
        return (
          <Grid item>There is no Story at the monent, check back later?</Grid>
        );
      case 2:
        return (
          <Grid item>
            I am working on my portfolio at the monent, check back later?
          </Grid>
        );
      case 3:
        return (
          <Grid item>
            There are too many clients I've worked with, trying to organize them
            in a better way :P, check back later?
          </Grid>
        );
      default:
        return null;
    }
  };

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
        {renderTabContent(tabIndex)}
      </Grid>
    </Box>
  );
};

export default TabsContent;
