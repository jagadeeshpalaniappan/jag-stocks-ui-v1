import React from 'react';

export default function TableDebugVals({
  pageIndex,
  pageSize,
  pageCount,
  canNextPage,
  canPreviousPage,
  sortBy,
  groupBy,
  expanded,
  filters,
  selectedRowIds,
  selectedFlatRows
}) {
  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            pageIndex,
            pageSize,
            pageCount,
            canNextPage,
            canPreviousPage,
            sortBy,
            groupBy,
            expanded,
            filters,
            selectedRowIds,
            'selectedFlatRows[].original': selectedFlatRows.map(d => d.original)
          },
          null,
          2
        )}
      </code>
    </pre>
  );
}
