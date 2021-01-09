import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/modules/app/components/Page';
import ResearchTable from '../components/ResearchTable';

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

const ResearchIndexView = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Research Stocks">
      <Container maxWidth={false}>
        <ResearchTable />
      </Container>
    </Page>
  );
};

export default ResearchIndexView;
