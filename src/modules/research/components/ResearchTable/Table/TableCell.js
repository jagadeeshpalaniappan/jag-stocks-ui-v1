import React from 'react';
import GroupedCell from '../GroupedCell';

export default function TableCell({ row, cell }) {
  return (
    <td {...cell.getCellProps()}>
      {cell.isGrouped ? (
        <GroupedCell row={row} cell={cell} />
      ) : cell.isAggregated ? (
        // If the cell is aggregated, use the Aggregated renderer for cell
        cell.render('Aggregated')
      ) : // For cells with repeated values, render null
      cell.isPlaceholder ? null : (
        // Otherwise, just render the regular cell
        cell.render('Cell', { editable: true })
      )}
    </td>
  );
}
