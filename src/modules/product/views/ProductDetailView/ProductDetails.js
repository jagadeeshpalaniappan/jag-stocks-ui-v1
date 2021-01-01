import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  LinearProgress,
  CircularProgress,
  Avatar,
  Typography
} from '@material-ui/core';

const states = [
  {
    value: 'CA',
    label: 'California'
  },
  {
    value: 'NY',
    label: 'New York'
  },
  {
    value: 'TX',
    label: 'Texas'
  }
];

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100,
    marginBottom: theme.spacing(2)
  }
}));

const ProfileDetails = ({ product, loading, onSave, onCancel }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: product.title,
    description: product.description,
    media: product.media,
    totalDownloads: product.totalDownloads,
    createdAt: product.createdAt
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form className={classes.root} onSubmit={onSave}>
      {loading && <LinearProgress />}
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Avatar className={classes.avatar} src={values.media} />
                <Typography color="textPrimary" gutterBottom variant="h5">
                  {values.title}
                </Typography>
                <Button color="primary" variant="text">
                  Upload picture
                </Button>
              </Box>
            </Grid>
            <Grid container spacing={3} item lg={8} md={6} xs={12}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  helperText="Please enter the first name"
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  required
                  value={values.title}
                  variant="outlined"
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={3}
                  rowsMax={4}
                  onChange={handleChange}
                  required
                  value={values.description}
                  variant="outlined"
                  disabled={loading}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Total Downloads"
                  name="totalDownloads"
                  onChange={handleChange}
                  value={values.totalDownloads}
                  variant="outlined"
                  disabled={loading}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Created At"
                  name="createdAt"
                  onChange={handleChange}
                  value={values.createdAt}
                  variant="outlined"
                  disabled={loading}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="flex-end" my={2}>
        <Button
          onClick={onCancel}
          color="primary"
          disabled={loading}
          className={classes.button}
        >
          Cancel
        </Button>
        <Button
          onClick={onSave}
          color="primary"
          variant="contained"
          disabled={loading}
          className={classes.button}
          startIcon={loading && <CircularProgress size={10} color="inherit" />}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
