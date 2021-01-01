import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const customer = {
  avatar: '/static/images/avatars/avatar.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Fullstack Developer',
  name: 'Jagadeesh Palaniappan',
  timezone: 'GTM-7'
};

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
    marginBottom: theme.spacing(2)
  }
}));

const Profile = ({ customer, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={customer.avatarUrl} />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {customer.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {customer.email}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment(customer.createdAt).format('DD/MM/YYYY hh:mm A')} `}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
