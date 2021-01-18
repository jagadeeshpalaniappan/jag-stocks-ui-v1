import {
  Box,
  makeStyles,
  SvgIcon,
  Switch,
  Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import React from 'react';
import { Circle, MoreVertical, CheckCircle, Filter } from 'react-feather';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function SimplePopover({ column }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Filter size={10} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box p={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Group By:</Typography>
            <Switch
              size="small"
              name="groupBy"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              {...column.getGroupByToggleProps()}
            />
          </Box>
          <div>{column.canFilter ? column.render('Filter') : null}</div>
        </Box>
      </Popover>
    </div>
  );
}
