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
  makeStyles
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

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ customer, loading, onSubmit }) => {
  const classes = useStyles();
  const [firstName, lastName] = customer.name ? customer.name.split(' ') : [];
  const [values, setValues] = useState({
    firstName,
    lastName,
    email: customer.email,
    phone: customer.phone,
    street: customer.address.street,
    city: customer.address.city,
    state: customer.address.state,
    country: customer.address.country
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please enter the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Street"
                name="street"
                onChange={handleChange}
                required
                value={values.street}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
                disabled={loading}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
                disabled={loading}
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <input type="submit" hidden />
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
