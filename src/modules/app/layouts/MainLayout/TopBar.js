import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import Logo from 'src/modules/app/components/Logo';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64
  }
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" component={RouterLink} to="/">
          <Logo />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
