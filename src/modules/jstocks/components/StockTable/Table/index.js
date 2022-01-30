import { Box, Button } from '@material-ui/core';
import React from 'react';
import {
  useExpanded,
  useFilters,
  useGlobalFilter,
  useGroupBy,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table';
import Table from './components/Table';
import TableAppliedFilters from './components/TableAppliedFilters';
import TableDebugVals from './components/TableDebugVals';
import TablePagination from './components/TablePagination';
import TableSearchInput from './components/TableSearchInput';
import TableShowHideColumns from './components/TableShowHideColumns';
import columns from './options/columns';
import defaultColumn from './options/defaultColumn';
import initialState from './options/initialState';
import filterTypes from './options/filterTypes';
import useCheckboxSelection from './plugins/useCheckboxSelection';
import AddResearchStocks from '../../AddResearchStocks';
import DeleteResearchStocks from '../../DeleteResearchStocks';

const getSelectedStockIds = selectedFlatRows => {
  return selectedFlatRows.map(d => d.original.stockId);
};

// Be sure to pass our updateMyData and the skipReset option
function TableIndex({ data, updateMyData, skipReset }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    page,
    headerGroups,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    setFilter,
    allColumns,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    getToggleHideAllColumnsProps,
    toggleHideAllColumns,
    selectedFlatRows,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
      globalFilter
    }
  } = useTable(
    {
      data,
      columns,
      defaultColumn,
      initialState,
      filterTypes,
      updateMyData, // isn't part of the API  (available on the instance), we can call this function from our cell renderer
      autoResetPage: !skipReset,
      autoResetSelectedRows: !skipReset,
      disableMultiSort: true
    },
    useFilters,
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    // Here we will use a plugin to add our selection column
    useCheckboxSelection
  );

  const selectedStockIds = getSelectedStockIds(selectedFlatRows);

  // Render the UI for your table
  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <AddResearchStocks />
        <DeleteResearchStocks selectedStockIds={selectedStockIds} />
        <TableShowHideColumns
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
          toggleHideAllColumns={toggleHideAllColumns}
        />
      </Box>
      <TableSearchInput
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <TableAppliedFilters filters={filters} setFilter={setFilter} />

      <Table
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        page={page}
        prepareRow={prepareRow}
        getTableBodyProps={getTableBodyProps}
      />

      <TablePagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageCount={pageCount}
        pageOptions={pageOptions}
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        gotoPage={gotoPage}
      />

      <TableDebugVals
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={pageCount}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        sortBy={sortBy}
        groupBy={groupBy}
        expanded={expanded}
        filters={filters}
        selectedRowIds={selectedRowIds}
        selectedFlatRows={selectedFlatRows}
      />
    </div>
  );
}

export default TableIndex;
