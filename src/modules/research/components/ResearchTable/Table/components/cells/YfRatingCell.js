import { Typography } from '@material-ui/core';
import React from 'react';

const YfRatingCell = ({ value, row }) => {
  if (row.isGrouped) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography style={{ width: 40 }}>
        ({row.original && row.original['yfNOfAnalysts']})
      </Typography>
      <Typography>{value}</Typography>
    </div>
  );
};

export default YfRatingCell;
