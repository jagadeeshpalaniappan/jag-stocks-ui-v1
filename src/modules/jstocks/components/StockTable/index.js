import { get } from 'lodash-es';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiGetStocksAction } from '../../state/getStocks/actions';
import { StockListStatus } from '../StockStatus';
import Table from './Table';
// import { _getHistoryKey } from '../../utils';
// import { tableData } from '../../data';

export function getStockTableData(apiData) {
  const hisKey = '2021-1'; //_getHistoryKey();
  return apiData.map((stock, idx) => {
    const rhgFairVal = get(stock, [
      'analysis',
      'rhg',
      hisKey,
      'fair_value',
      'value'
    ]);
    return {
      stockId: stock.stockId,
      name: get(stock, ['analysis', 'yf', hisKey, 'name']),
      buyPrice: stock.avgPrice,
      qty: stock.quantity,
      yfDivYield: get(stock, ['analysis', 'yf', hisKey, 'dividendYield']),
      yfNOfAnalysts: get(stock, [
        'analysis',
        'yf',
        hisKey,
        'numberOfAnalystOpinions'
      ]),
      yfRating: get(stock, ['analysis', 'yf', hisKey, 'rating']),
      rhNOfAnalysts: get(stock, ['analysis', 'rh', hisKey, 'nOfAnalysts']),
      rhBuy: get(stock, ['analysis', 'rh', hisKey, 'buy']),
      rhHold: get(stock, ['analysis', 'rh', hisKey, 'hold']),
      rhSell: get(stock, ['analysis', 'rh', hisKey, 'sell']),
      rhgStarRating: get(stock, ['analysis', 'rhg', hisKey, 'star_rating']),
      rhgStewardship: get(
        stock,
        ['analysis', 'rhg', hisKey, 'stewardship'],
        ''
      ),
      rhgUncertainty: get(
        stock,
        ['analysis', 'rhg', hisKey, 'uncertainty'],
        ''
      ),
      rhgFairVal: rhgFairVal ? Number(rhgFairVal) : null
    };
  });
}

function ResearchTable({ stocks }) {
  console.log({ stocks });

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
