import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  Box,
  Typography
} from '@material-ui/core';
import AppIcon from 'src/modules/app/components/AppIcon';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    width: 'inherit'
  },
  button: {
    // color: theme.palette.text.secondary,
    color: 'inherit',
    fontWeight: 300,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    borderRadius: 0,
    padding: 0,
    width: 70,
    height: 60,
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    '&:hover': {
      background: theme.palette.background.dark,
      color: theme.palette.primary.main
    }
  },
  buttonLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {},
  title: {
    fontSize: 8,
    fontWeight: 300,
    marginTop: theme.spacing(0.5)
  },
  active: {
    background: theme.palette.background.dark,
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      // color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon,
  title,
  ignoreActive,
  hideTitle,
  onClick,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        disableRipple
        activeClassName={ignoreActive ? '' : classes.active}
        classes={{ root: classes.button, label: classes.buttonLabel }}
        component={href && RouterLink}
        to={href}
        onClick={onClick}
      >
        {icon && <AppIcon icon={icon} className={classes.icon} size="20" />}
        {!hideTitle && (
          <Typography
            variant="caption"
            display="block"
            className={classes.title}
          >
            {title}
          </Typography>
        )}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
