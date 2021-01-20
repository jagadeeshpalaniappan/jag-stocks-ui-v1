import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography, Box } from '@material-ui/core';
import LoadingButton from 'src/modules/common/components/LoadingButton';

function AddStocksStatus({ status }) {
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

export default function AddStocks({ addResearchStocks }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Stock(s)
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Add Stock(s)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tip! use comma to add mulitple stocks. (E.g. AAPL,FB,MSFT)
          </DialogContentText>
          <TextField
            autoFocus
            id="researchStockIds"
            label="StockIds"
            variant="outlined"
            placeholder="AAPL,MSFT,BABA"
            multiline
            fullWidth
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <AddStocksStatus status={{ loading: true, error: false }} />
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button
            onClick={addResearchStocks}
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
