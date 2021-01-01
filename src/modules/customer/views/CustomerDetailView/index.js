import {
  Box,
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data';
import CustomerDetails from './CustomerDetails';
import CustomerImage from './CustomerImage';

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    backgroundColor: theme.palette.background.dark
  }
}));

function CustomerDetailView({
  customer,
  success,
  loading,
  setSuccess,
  handleSave
}) {
  return (
    <>
      <Box mb={2}>
        <Collapse in={success && !loading}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Customer saved successfully
          </Alert>
        </Collapse>
        {loading && <LinearProgress />}
      </Box>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <CustomerImage customer={customer} />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <CustomerDetails
            customer={customer}
            loading={loading}
            onSubmit={handleSave}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default function CustomerDetailViewModal(props) {
  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const customer =
    id === 'create' ? { address: {} } : data.find(item => item.id === id);
  console.log('CustomerDetailView', { props, id });

  //   const handleClickOpen = scrollType => () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    // setOpen(false);
    navigate('/app/customers');
  };
  const handleSave = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}

      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id="scroll-dialog-title">Customer</DialogTitle>
        <DialogContent>
          <CustomerDetailView
            customer={customer}
            success={success}
            loading={loading}
            setSuccess={setSuccess}
            handleSave={handleSave}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            disabled={loading}
            startIcon={
              loading && <CircularProgress size={10} color="inherit" />
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
