import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Page from 'src/modules/app/components/Page';
import useQuery from 'src/modules/common/hooks/useQuery';
import data from '../../data';
import ProductList from './ProductList';
import ProductsTab from './ProductsTab';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductsTabContainer = ({ selectedTab }) => {
  switch (selectedTab) {
    case 0:
      return <ProductList />;
    case 1:
      return <Typography>Tab 1</Typography>;
    default:
      return <Typography>Tab Default</Typography>;
  }
};

const ProductIndexView = () => {
  const classes = useStyles();
  let query = useQuery();
  const tab = query.get('tab');
  const selectedTab = tab ? Number(tab) : 0;
  return (
    <Page className={classes.root} title="Products">
      <ProductsTab selectedTab={selectedTab} />
      <Container maxWidth={false}>
        <ProductsTabContainer selectedTab={selectedTab} />
      </Container>
    </Page>
  );
};

export default ProductIndexView;
