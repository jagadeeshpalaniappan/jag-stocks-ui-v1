import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

import { MoreHorizontal as MoreHorizIcon } from 'react-feather';
import NavItem from './NavItem';
import MoreNavPopoverItem from './MoreNavPopoverItem';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

export default function MoreNavItem({ items }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = event => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };
  const closePopover = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  return (
    <div>
      <NavItem
        key="more"
        title="More"
        icon="More"
        onClick={openPopover}
        ignoreActive
        hideTitle
      />
      <Popover
        id="more-popover"
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left'
        }}
      >
        <Box width={300} minHeight={250} px={1}>
          <List className={classes.list}>
            {items.map(item => (
              <MoreNavPopoverItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </List>
        </Box>
      </Popover>
    </div>
  );
}
