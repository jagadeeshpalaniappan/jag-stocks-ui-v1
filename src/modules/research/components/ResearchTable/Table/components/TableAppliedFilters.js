import { Chip, Box } from '@material-ui/core';
import React from 'react';

export default function TableAppliedFilters({ filters, setFilter }) {
  if (!(filters && filters.length > 0)) return null;
  return (
    <Box marginBottom={2}>
      {filters.map(filter => (
        <Chip
          label={`${filter.id}: ${JSON.stringify(filter.value)}`}
          onDelete={() => setFilter(filter.id, undefined)}
        ></Chip>
      ))}
    </Box>
  );
}
