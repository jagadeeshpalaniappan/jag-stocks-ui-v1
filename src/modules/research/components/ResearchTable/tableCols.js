import React from 'react';
import NumberRangeColumnFilter from '../../../mystock/components/filters/NumberRangeColumnFilter';
import SelectColumnFilter from '../../../mystock/components/filters/SelectColumnFilter';

import EditableCell from '../../../mystock/components/EditableCell';
import DefaultColumnFilter from '../../../mystock/components/filters/DefaultColumnFilter';

export const tableDefaultColumn = () => ({
  Filter: DefaultColumnFilter,
  Cell: EditableCell
});

// ["stockId", "name", "yfRating", "rhNOfAnalysts", "rhBuy", "rhHold", "rhSell", "rhgStarRating", "rhgStewardship", "rhgUncertainty"]
export const tableCols = [
  {
    Header: 'ID',
    accessor: 'stockId'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'yfDivYield',
    accessor: 'yfDivYield',
    Filter: NumberRangeColumnFilter,
    filter: 'between'
  },
  {
    Header: 'yfRating',
    accessor: 'yfRating',
    Filter: NumberRangeColumnFilter,
    filter: 'between',
    Cell: ({ value, row }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <small style={{ width: 40 }}>
          ({row.original && row.original['yfNOfAnalysts']})
        </small>
        <div>{value}</div>
      </div>
    )
  },
  {
    Header: 'RH',
    accessor: 'rhBuy',
    Cell: ({ value, row }) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <small style={{ width: 40 }}>
          ({row.original && row.original['rhNOfAnalysts']})
        </small>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>B:{row.original && row.original['rhBuy']}</span>
          <span>H:{row.original && row.original['rhHold']}</span>
          <span>S:{row.original && row.original['rhSell']}</span>
        </div>
      </div>
    )
  },
  {
    Header: 'rhgStarRating',
    accessor: 'rhgStarRating',
    Filter: NumberRangeColumnFilter,
    filter: 'between'
  },
  {
    Header: 'rhgStewardship',
    accessor: 'rhgStewardship',
    Filter: SelectColumnFilter,
    filter: 'includes'
  },
  {
    Header: 'rhgUncertainty',
    accessor: 'rhgUncertainty',
    Filter: SelectColumnFilter,
    filter: 'includes'
  },
  {
    Header: 'rhgFairVal',
    accessor: 'rhgFairVal',
    Filter: NumberRangeColumnFilter,
    filter: 'between'
  }
];
