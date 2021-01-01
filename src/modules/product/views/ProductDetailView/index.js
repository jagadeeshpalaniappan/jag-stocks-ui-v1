import {
  Box,
  Collapse,
  Container,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from 'src/modules/app/components/Page';
import data from '../../data';
import ProductDetails from './ProductDetails';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function ProductDetailViewModal(props) {
  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = id === 'create' ? {} : data.find(item => item.id === id);
  console.log('ProductDetailView', { props, id, product });

  const handleCancel = () => {
    navigate('/app/products');
  };
  const handleSave = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Typography variant="h4" gutterBottom>
          {id === 'create' ? 'Create Product' : 'Product'}
        </Typography>
        <Box my={2}>
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
              Product saved successfully
            </Alert>
          </Collapse>
        </Box>
        <ProductDetails
          product={product}
          loading={loading}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Container>
    </Page>
  );
}
