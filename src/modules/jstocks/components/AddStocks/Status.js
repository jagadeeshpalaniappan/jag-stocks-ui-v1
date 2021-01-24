import React from 'react';
export default function AddStocksStatus({ status }) {
  let label = null;
  if (status.loading) {
    label = (
      <>
        <CircularProgress size={20} style={{ marginRight: 10 }} />
        <Typography color="primary">Adding Stocks...</Typography>
      </>
    );
  } else if (status.error)
    label = <Typography color="error">Error while adding stocks!</Typography>;
  else if (status.success)
    label = <Typography color="primary">Stocks added successfully</Typography>;

  return (
    <Box display="flex" alignItems="center" flexGrow={1} marginLeft={2}>
      {label}
    </Box>
  );
}
