import { Typography } from '@material-ui/core';
import React from 'react';

const RhAnalysis = ({ value, row }) => {
  if (row.isGrouped) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography style={{ width: 40 }}>
        ({row.original && row.original['rhNOfAnalysts']})
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>B:{row.original && row.original['rhBuy']}</Typography>
        <Typography>H:{row.original && row.original['rhHold']}</Typography>
        <Typography>S:{row.original && row.original['rhSell']}</Typography>
      </div>
    </div>
  );
};

export default RhAnalysis;
