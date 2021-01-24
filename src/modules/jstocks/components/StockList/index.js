import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { apiGetStocksAction } from '../../state/getStocks/actions';
import { StockListStatus } from '../StockStatus';
import List from './List';

export const StockList = ({ stocks, apiGetStocksAction }) => {
  console.log('StockList');
  useEffect(() => {
    apiGetStocksAction();
  }, [apiGetStocksAction]);
  return (
    <>
      <StockListStatus />
      <List stocks={stocks} />
    </>
  );
};

const getStocks = state => state.stockState.stocks.data;
const getFilter = state => state.stockState.filter;

// PERFORMANCE-ISSUE-FIXED: // created: MemoizedSelector
// 'stocks.filter' will be called only if 'state.stockState.stocks.data' changes or 'state.stockState.filter' changes
const getVisibleStocks = createSelector(
  [getStocks, getFilter],
  (stocks, filter) =>
    stocks &&
    stocks.filter(stock => {
      let activeMatched = true;
      if (filter.active === 'Active') activeMatched = stock.isActive;
      if (filter.active === 'InActive') activeMatched = !stock.isActive;
      if (filter.active === 'All') activeMatched = true;

      return activeMatched;
    })
);

const mapStateToProps = state => ({ stocks: getVisibleStocks(state) });
const mapDispatchToProps = { apiGetStocksAction };
export default connect(mapStateToProps, mapDispatchToProps)(StockList);
