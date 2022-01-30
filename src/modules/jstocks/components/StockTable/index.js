import { get } from 'lodash-es';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiGetStocksAction } from '../../state/getStocks/actions';
import { StockListStatus } from '../StockStatus';
import Table from './Table';
import { _getHistoryKey, getLatestVal } from '../../utils';
// import { tableData } from '../../data';

export function getStockTableData(apiData) {
  // const hisKey = '2021-1'; //_getHistoryKey();
  // const hisKey = _getHistoryKey();
  return apiData.map((stock, idx) => {
    const rhgFairVal = getLatestVal(
      stock,
      ['analysis', 'rhg'],
      ['fair_value', 'value']
    );
    return {
      stockId: stock.stockId,
      name: getLatestVal(stock, ['analysis', 'yf'], ['name']),
      buyPrice: stock.avgPrice,
      qty: stock.quantity,
      yfDivYield: getLatestVal(stock, ['analysis', 'yf'], ['dividendYield']),
      yfNOfAnalysts: getLatestVal(
        stock,
        ['analysis', 'yf'],
        ['numberOfAnalystOpinions']
      ),
      yfRating: getLatestVal(stock, ['analysis', 'yf'], ['rating']),
      rhNOfAnalysts: getLatestVal(stock, ['analysis', 'rh'], ['nOfAnalysts']),
      rhBuy: getLatestVal(stock, ['analysis', 'rh'], ['buy']),
      rhHold: getLatestVal(stock, ['analysis', 'rh'], ['hold']),
      rhSell: getLatestVal(stock, ['analysis', 'rh'], ['sell']),
      rhgStarRating: getLatestVal(stock, ['analysis', 'rhg'], ['star_rating']),
      rhgStewardship: getLatestVal(stock, ['analysis', 'rhg'], ['stewardship']),
      rhgUncertainty: getLatestVal(stock, ['analysis', 'rhg'], ['uncertainty']),
      rhgFairVal: rhgFairVal ? Number(rhgFairVal) : null
    };
  });
}

function ResearchTable({ stocks }) {
  const tableData = getStockTableData(stocks);

  // We need to keep the table from resetting the pageIndex when we Update data.
  // So we can keep track of that flag with a ref.
  const skipResetRef = React.useRef(false);
  const [data, setData] = React.useState(() => tableData);
  const [originalData] = React.useState(tableData);

  // After tableData changes, we turn the flag back off
  // so that if tableData actually changes the page is reset (not when editing it)
  React.useEffect(() => {
    skipResetRef.current = false;
  }, [tableData]);

  // When our cell renderer calls updateMyData, we'll use the rowIndex, columnId and new value to update the original tableData
  const updateMyData = (rowIndex, columnId, value) => {
    console.log('updateMyData:', { rowIndex, columnId, value });
    // We also turn on the flag to not reset the page
    skipResetRef.current = true;
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value
          };
        }
        return row;
      })
    );
  };

  // Let's add a tableData resetter/randomizer to help to illustrate that flow...
  const resetData = () => {
    skipResetRef.current = true; // Don't reset the page when we do this
    setData(originalData);
  };

  return (
    <div>
      <Table
        data={tableData}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </div>
  );
}

export const StockList = ({ stocks, apiGetStocksAction }) => {
  console.log('StockList');
  useEffect(() => {
    apiGetStocksAction();
  }, [apiGetStocksAction]);
  return (
    <>
      <StockListStatus />
      <ResearchTable stocks={stocks} />
    </>
  );
};

const getStocks = state => state.stockState.stocks.data;
const mapStateToProps = state => ({ stocks: getStocks(state) });
const mapDispatchToProps = { apiGetStocksAction };
export default connect(mapStateToProps, mapDispatchToProps)(StockList);
