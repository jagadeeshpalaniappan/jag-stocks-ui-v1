import { Typography } from '@material-ui/core';
import React from 'react';
export default function TableHeader({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              <div>
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <span {...column.getGroupByToggleProps()}>
                    {column.isGrouped ? '🛑 ' : '👊 '}
                  </span>
                ) : null}

                <span {...column.getSortByToggleProps()}>
                  <Typography>{column.render('Header')}</Typography>
                  {/* Add a sort direction indicator */}
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </div>
              {/* Render the columns filter UI */}
              <div>{column.canFilter ? column.render('Filter') : null}</div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
