import React from 'react';
import { Box, SvgIcon } from '@material-ui/core';
import { ChevronRight, ChevronDown } from 'react-feather';

export default function TableGroupedCell({ row, cell }) {
  return (
    <Box display="flex" alignItems="center">
      <SvgIcon
        fontSize="small"
        color="action"
        {...row.getToggleRowExpandedProps()}
      >
        {row.isExpanded ? <ChevronDown /> : <ChevronRight />}
      </SvgIcon>{' '}
      {cell.render('Cell', { editable: false })}({row.subRows.length})
    </Box>
  );
}
