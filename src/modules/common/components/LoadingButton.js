import React from 'react';
import { Button, Box, CircularProgress } from '@material-ui/core';

export default function LoadingButton({
  loading,
  label,
  loadingLabel,
  disabled,
  children,
  ...rest
}) {
  return (
    <Button disabled={loading || disabled} {...rest}>
      {loading ? (
        <Box display="flex" alignItems="center">
          <CircularProgress size={20} style={{ marginRight: 10 }} />
          {loadingLabel}
        </Box>
      ) : (
        children
      )}
    </Button>
  );
}
