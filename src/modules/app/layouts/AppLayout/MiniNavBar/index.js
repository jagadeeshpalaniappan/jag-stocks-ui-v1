import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import MiniNavBarItem from './MiniNavBarItem';
import MoreNavItem from './MoreNavItem';
import * as appNavs from 'src/data/appNavs';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 104,
    top: 0,
    height: '100%'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ bgcolor, color }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      bgcolor={bgcolor}
      color={color}
    >
      <MiniNavBarItem
        href="/"
        key="my-app"
        title="My App"
        icon="Logo"
        ignoreActive
        hideTitle
      />

      <List>
        {appNavs.items.map(item => (
          <MiniNavBarItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
            img={item.img}
            hideTitle={item.hideTitle}
            badge={item.badge}
            menus={item.menus}
          />
        ))}
        {appNavs.moreItems && appNavs.moreItems.length > 0 && (
          <MoreNavItem items={appNavs.moreItems} />
        )}
      </List>

      <Box flexGrow={1} />

      <List>
        {appNavs.bottomItems.map(item => (
          <MiniNavBarItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
            img={item.img}
            hideTitle={item.hideTitle}
            badge={item.badge}
            menus={item.menus}
          />
        ))}
      </List>
    </Box>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
