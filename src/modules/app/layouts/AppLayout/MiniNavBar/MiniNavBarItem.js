import React from 'react';
import NavItem from './NavItem';
import NavItemWithMenus from './NavItemWithMenus';

export default function MiniNavBarItem({ menus, ...rest }) {
  return menus && menus.length > 0 ? (
    <NavItemWithMenus menus={menus} {...rest} />
  ) : (
    <NavItem {...rest} />
  );
}
