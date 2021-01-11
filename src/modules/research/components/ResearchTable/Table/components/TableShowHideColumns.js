import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import { Check } from 'react-feather';

const ITEM_HEIGHT = 48;

export default function TableShowHideColumns({
  allColumns,
  getToggleHideAllColumnsProps,
  toggleHideAllColumns
}) {
  console.log({
    allColumns,
    getToggleHideAllColumnsProps,
    toggleHideAllColumns
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box marginLeft={1}>
      <Button variant="contained" onClick={handleClick}>
        Show/Hide Columns
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem onClick={() => toggleHideAllColumns()}>
          {getToggleHideAllColumnsProps().checked && (
            <SvgIcon fontSize="small">
              <Check />
            </SvgIcon>
          )}
          <div style={{ marginLeft: 5 }}>Toggle All</div>
        </MenuItem>
        {allColumns.map(column => (
          <MenuItem key={column.id} onClick={() => column.toggleHidden()}>
            {column.getToggleHiddenProps().checked && (
              <SvgIcon fontSize="small">
                <Check />
              </SvgIcon>
            )}
            <div style={{ marginLeft: 5 }}>{column.Header}</div>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
