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
import { useCheckboxSelection } from '../../../mystock/components/CheckboxSelection';

function useMyTable({
  columns,
  data,
  defaultColumn,
  filterTypes,
  updateMyData,
  skipReset
}) {
  return useTable(
    {
      columns,
      data,
      defaultColumn,
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
}

export default useMyTable;
