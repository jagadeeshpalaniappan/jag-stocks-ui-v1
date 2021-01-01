import {
  Box,
  Button,
  InputAdornment,
  makeStyles,
  SvgIcon,
  TextField
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Box width={600} my={1}>
          <TextField
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder="Search Product"
            variant="outlined"
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" flexGrow={1} my={1}>
          <Button className={classes.importButton}>Import</Button>
          <Button className={classes.exportButton}>Export</Button>
          <Button
            color="primary"
            variant="contained"
            component={RouterLink}
            to="create"
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
