import React from 'react';
import NumberRangeColumnFilter from '../components/filters/NumberRangeColumnFilter';
import SelectColumnFilter from '../components/filters/SelectColumnFilter';
import RhAnalysisCell from '../components/cells/RhAnalysisCell';
import YfRatingCell from '../components/cells/YfRatingCell';
import StockIdCell from '../components/cells/StockIdCell';

// ["stockId", "name", "yfRating", "rhNOfAnalysts", "rhBuy", "rhHold", "rhSell", "rhgStarRating", "rhgStewardship", "rhgUncertainty"]
const columns = [
  {
    Header: 'ID',
    accessor: 'stockId',
    Cell: StockIdCell
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Price',
    accessor: 'currPrice'
  },
  {
    Header: 'Buy:Price',
    accessor: 'buyPrice'
  },
  {
    Header: 'Qty',
    accessor: 'qty',
    Filter: NumberRangeColumnFilter,
    filter: 'between'
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
