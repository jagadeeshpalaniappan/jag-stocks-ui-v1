import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useEffect } from 'react';
// import ResearchStockForm from '../ResearchStockForm';
import { connect } from 'react-redux';
import { apiCreateStockAction } from '../../state/createStock/actions';

function DeleteStockStatus({ status }) {
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

function DeleteResearchStocks({
  selectedStockIds,
  deleteStockStatus,
  apiCreateStockAction
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (deleteStockStatus.success) handleClose();
  }, [deleteStockStatus]);

  const onDelete = () => {
    console.log('onDelete:', selectedStockIds);

    // apiCreateStockAction(stocks);
    // if (stock && stock.id) onSave({ id: stock.id, ...data });
    // else onSave(data);
  };

  return (
    <Box marginLeft={2}>
      <Button variant="contained" onClick={handleClickOpen}>
        Delete Stocks
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Delete Stock(s)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you wanted to delete below stocks?
          </DialogContentText>
          <Box style={{ overflowWrap: 'break-word' }}>
            {JSON.stringify(selectedStockIds)}
          </Box>
        </DialogContent>
        <DialogActions>
          <DeleteStockStatus status={deleteStockStatus} />
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={onDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

const getDeleteStockStatus = state => state.stockState.deleteStockStatus;
const mapStateToProps = state => ({
  deleteStockStatus: getDeleteStockStatus(state)
});
const mapDispatchToProps = { apiCreateStockAction };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteResearchStocks);
