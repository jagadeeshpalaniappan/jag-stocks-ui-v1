import React from 'react';
import GlobalSearchFilter from '../../../../mystock/components/GlobalSearchFilter';
import Pagination from '../../../../mystock/components/Pagination';
import ShowHideColumns from '../../../../mystock/components/ShowHideColumns';
import TableDebugVals from '../TableDebugVals';
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
import { useCheckboxSelection } from '../../../../mystock/components/CheckboxSelection';

import { tableCols, tableDefaultColumn } from './config';
import filterTypes from './filterTypes';
import Table from './Table';

// Be sure to pass our updateMyData and the skipReset option
function ResearchTable1({ data, updateMyData, skipReset }) {
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
    allColumns,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    getToggleHideAllColumnsProps,
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
      columns: tableCols,
      data,
      defaultColumn: tableDefaultColumn,
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

  // Render the UI for your table
  return (
    <div>
      <ShowHideColumns
        allColumns={allColumns}
        getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
      />
      <GlobalSearchFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <Table
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        page={page}
        prepareRow={prepareRow}
        getTableBodyProps={getTableBodyProps}
      />

      <Pagination
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
      />
    </div>
  );
}

export default ResearchTable1;
