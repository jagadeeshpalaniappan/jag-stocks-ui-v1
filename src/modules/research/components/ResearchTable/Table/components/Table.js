import { Paper } from '@material-ui/core';
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table({
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  getTableBodyProps
}) {
  console.log('MyTable', {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    getTableBodyProps
  });
  return (
    <Paper elevation={2} style={{ overflowX: 'auto' }}>
      <table {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          page={page}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
        />
      </table>
    </Paper>
  );
}
