import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/modules/app/components/Page';
import Notifications from './Notifications';
import Password from './Password';
import { FormatListBulletedSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SettingsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth={false}>
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  );
};

export default SettingsView;
