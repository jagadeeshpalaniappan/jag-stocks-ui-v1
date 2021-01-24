import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useEffect } from 'react';
// import ResearchStockForm from '../ResearchStockForm';
import { connect } from 'react-redux';
import { apiCreateStockAction } from '../../state/createStock/actions';
import { useForm } from 'react-hook-form';

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

function AddStocks({ createStockStatus, apiCreateStockAction }) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({ defaultValues: {} });
  console.log('AddStocks', { errors });
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (createStockStatus.success) handleClose();
  }, [createStockStatus]);

  const onSubmit = data => {
    console.log('FORM-VALUES:', { data, errors });
    const stockIds = data.stockIds.split(',');
    const stocks = stockIds.map(stockId => ({
      stockId,
      isResearch: true,
      userId: 'tmp1'
    }));
    apiCreateStockAction(stocks);
    // if (stock && stock.id) onSave({ id: stock.id, ...data });
    // else onSave(data);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Research Stock(s)
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Add Stock(s)</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              name="stockIds"
              inputRef={register({
                required: {
                  value: true,
                  message: 'StockIds is required'
                }
              })}
              error={!!errors.stockIds}
              helperText={errors.stockIds ? errors.stockIds.message : ''}
            />
            {errors.name && (
              <Typography color="error">{errors.name.message}</Typography>
            )}
          </DialogContent>
          <DialogActions>
            <AddStocksStatus status={createStockStatus} />
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button type="submit" color="primary" variant="contained">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

const getCreateStockStatus = state => state.stockState.createStockStatus;
const mapStateToProps = state => ({
  createStockStatus: getCreateStockStatus(state)
});
const mapDispatchToProps = { apiCreateStockAction };
export default connect(mapStateToProps, mapDispatchToProps)(AddStocks);
