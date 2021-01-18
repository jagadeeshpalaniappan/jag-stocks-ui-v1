import { Paper, makeStyles } from '@material-ui/core';
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto'
  }
}));

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
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root}>
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
