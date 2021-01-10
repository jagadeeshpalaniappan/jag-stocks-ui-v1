import React from 'react';
import NumberRangeColumnFilter from '../components/filters/NumberRangeColumnFilter';
import SelectColumnFilter from '../components/filters/SelectColumnFilter';
import RhAnalysisCell from '../components/cells/RhAnalysisCell';
import YfRatingCell from '../components/cells/YfRatingCell';

// ["stockId", "name", "yfRating", "rhNOfAnalysts", "rhBuy", "rhHold", "rhSell", "rhgStarRating", "rhgStewardship", "rhgUncertainty"]
const columns = [
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
    Cell: YfRatingCell
  },
  {
    Header: 'RH',
    accessor: 'rhBuy',
    Cell: RhAnalysisCell
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

export default columns;
