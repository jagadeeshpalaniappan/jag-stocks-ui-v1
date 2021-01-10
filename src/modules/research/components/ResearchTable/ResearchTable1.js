import React from 'react';
import EditableCell from '../../../mystock/components/EditableCell';
import customFilterTypes from '../../../mystock/components/filters/customFilterTypes';
import DefaultColumnFilter from '../../../mystock/components/filters/DefaultColumnFilter';

import GlobalSearchFilter from '../../../mystock/components/GlobalSearchFilter';
import Pagination from '../../../mystock/components/Pagination';
import ShowHideColumns from '../../../mystock/components/ShowHideColumns';
import Table from './Table/index1';
import TableDebugVals from './Table/components/TableDebugVals';
import useMyTable from './useMyTable';
import { tableCols } from './Table/config';
import { tableData } from '../../data';

const defaultColumnConfig = {
  Filter: DefaultColumnFilter,
  Cell: EditableCell
};

// Be sure to pass our updateMyData and the skipReset option
function ResearchTable({
  columns,
  data,
  updateMyData,
  skipReset,
  filterTypes,
  defaultColumn
}) {
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
  } = useMyTable({
    columns,
    data,
    defaultColumn: defaultColumnConfig,
    filterTypes,
    updateMyData,
    skipReset
  });

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

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number';

// This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median
function roundedMedian(leafValues) {
  let min = leafValues[0] || 0;
  let max = leafValues[0] || 0;

  leafValues.forEach(value => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });

  return Math.round((min + max) / 2);
}

function ResearchTable1({}) {
  const columns = React.useMemo(() => tableCols, []);
  const filterTypes = React.useMemo(customFilterTypes, []);
  // const defaultColumn = React.useMemo(defaultColumnConfig, []);

  // console.log({ tableData });
  const [data, setData] = React.useState(() => tableData);
  const [originalData] = React.useState(tableData);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  const skipResetRef = React.useRef(false);

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    console.log('updateMyData:', { rowIndex, columnId, value });
    // We also turn on the flag to not reset the page
    // skipResetRef.current = true;
    // setData(old =>
    //   old.map((row, index) => {
    //     if (index === rowIndex) {
    //       return {
    //         ...row,
    //         [columnId]: value
    //       };
    //     }
    //     return row;
    //   })
    // );
  };

  // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    skipResetRef.current = false;
  }, [data]);

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => {
    // Don't reset the page when we do this
    skipResetRef.current = true;
    setData(originalData);
  };

  return (
    <div>
      <ResearchTable
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
        filterTypes={filterTypes}
      />
    </div>
  );
}

export default ResearchTable1;
