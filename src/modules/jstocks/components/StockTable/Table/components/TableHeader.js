import { SvgIcon, Typography, Box } from '@material-ui/core';
import React from 'react';
import { Circle, CheckCircle, ChevronUp, ChevronDown } from 'react-feather';
import TableHeaderMenu from './TableHeaderMenu';
export default function TableHeader({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              <Box display="flex" alignItems="center">
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <Box marginRight={1}>
                    {column.isGrouped ? (
                      <SvgIcon
                        fontSize="small"
                        color="primary"
                        {...column.getGroupByToggleProps()}
                      >
                        <CheckCircle />
                      </SvgIcon>
                    ) : null}
                  </Box>
                ) : null}

                <Typography
                  variant="subtitle2"
                  {...column.getSortByToggleProps()}
                >
                  {column.render('Header')}
                </Typography>
                {/* Add a sort direction indicator */}
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <SvgIcon fontSize="small">
                      <ChevronDown />
                    </SvgIcon>
                  ) : (
                    <SvgIcon fontSize="small">
                      <ChevronUp />
                    </SvgIcon>
                  )
                ) : (
                  ''
                )}

                <TableHeaderMenu column={column} />
              </Box>
              {/* Render the columns filter UI */}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
