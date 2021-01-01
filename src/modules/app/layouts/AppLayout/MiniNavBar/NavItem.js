import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppIcon from 'src/modules/app/components/AppIcon';
import {
  Button,
  ListItem,
  makeStyles,
  Avatar,
  Box,
  Typography,
  Badge,
  fade
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    // color: theme.palette.text.secondary,
    // color: 'inherit',
    fontWeight: 300,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
    borderRadius: 0,
    padding: 0,
    height: 50,
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    // opacity: 0.7,
    color: fade(theme.palette.common.white, 0.8),
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
  buttonLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 8,
    fontWeight: 300,
    marginTop: theme.spacing(0.5)
  },
  active: {
    borderLeft: '2px solid',
    backgroundColor: theme.palette.primary.dark,
    opacity: 1,
    color: 'inherit',
    '& $title': {
      // fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      // color: theme.palette.primary.main
    }
  }
}));

function NavItemIcon({ img, icon, title, badge, hideTitle }) {
  if (badge)
    return (
      <Badge color="secondary" variant="dot" overlap={hideTitle && 'circle'}>
        {img && <Avatar alt={title} src={img} />}
        {icon && <AppIcon icon={icon} size="20" />}
      </Badge>
    );
  else return <AppIcon icon={icon} size="20" />;
}

const NavItem = ({
  className,
  href,
  icon,
  img,
  title,
  ignoreActive,
  hideTitle,
  onClick,
  badge,
  ...rest
}) => {
  const classes = useStyles();

  const btnProps = {};
  if (href) {
    btnProps.to = href;
    btnProps.component = RouterLink;
    btnProps.activeClassName = ignoreActive ? '' : classes.active;
  }

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        disableRipple
        classes={{ root: classes.button, label: classes.buttonLabel }}
        onClick={onClick}
        {...btnProps}
      >
        {(icon || img) && (
          <NavItemIcon
            icon={icon}
            img={img}
            title={title}
            badge={badge}
            hideTitle={hideTitle}
          />
        )}

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
