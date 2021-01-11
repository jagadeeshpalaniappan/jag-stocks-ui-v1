import { Typography, Box } from '@material-ui/core';
import React from 'react';
import Progressbar from './Progressbar';

const RhAnalysis = ({ value, row }) => {
  if (row.isGrouped) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: 100 }}>
      <Typography variant="caption" color="textSecondary">
        ({row.original && row.original['rhNOfAnalysts']})
      </Typography>

      {row.original && row.original['rhBuy'] ? (
        <Box width={100} marginLeft={1}>
          <Progressbar label="B:" value={row.original['rhBuy']} />
          <Progressbar label="H:" value={row.original['rhHold']} />
          <Progressbar label="S:" value={row.original['rhSell']} />
        </Box>
      ) : null}
    </div>
  );
};

export default RhAnalysis;
