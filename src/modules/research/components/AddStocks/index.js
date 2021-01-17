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

function AddStocksStatus({ status }) {
  if (status.loading)
    return (
      <Box display="flex" alignItems="center">
        <CircularProgress size={20} style={{ marginRight: 10 }} />
        <Typography color="primary">Adding Stocks...</Typography>
      </Box>
    );
  else if (status.error)
    return <Typography color="error">Error while adding stocks!</Typography>;
  else if (status.success)
    return <Typography color="primary">Stocks added successfully</Typography>;
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
            margin="dense"
            id="stockIds"
            label="Stock Ids"
            type="textareaa"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <AddStocksStatus status={{ loading: true }} />
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
