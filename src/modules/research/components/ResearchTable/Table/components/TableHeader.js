import React from 'react';
import { Typography } from '@material-ui/core';
export default function TableHeader({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              <Typography variant="subtitle2">
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <span {...column.getGroupByToggleProps()}>
                    {column.isGrouped ? '🛑 ' : '👊 '}
                  </span>
                ) : null}

                <span {...column.getSortByToggleProps()}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </Typography>
              {/* Render the columns filter UI */}
              <div>{column.canFilter ? column.render('Filter') : null}</div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
