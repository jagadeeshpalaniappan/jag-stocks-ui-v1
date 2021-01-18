import { Typography } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  success: {
    color: theme.palette.success.main
  },
  warning: {
    color: theme.palette.warning.main
  },
  error: {
    color: theme.palette.error.main
  }
}));

const YfRatingCell = ({ value, row }) => {
  const classes = useStyles();
  if (row.isGrouped) return null;
  let colorClass = '';
  if (value >= 3) colorClass = classes.error;
  else if (value >= 2.5) colorClass = classes.warning;
  else if (value < 1) colorClass = classes.success;

  return (
    <Typography className={colorClass}>
      {value} ({row.original && row.original['yfNOfAnalysts']})
    </Typography>
  );
};

export default YfRatingCell;
