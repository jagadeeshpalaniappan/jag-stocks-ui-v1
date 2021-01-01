import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/modules/app/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from '../../data';
import Header from '../Header';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  },
  container: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  console.log('CustomerListView');
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page className={classes.root} title="Customers">
      <Header />
      <Container maxWidth={false} className={classes.container}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
      <Outlet />
    </Page>
  );
};

export default CustomerListView;
