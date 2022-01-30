import React from 'react';
import Page from 'src/modules/app/components/Page';
import StockList from '../components/StockList';
import StockTable from '../components/StockTable';
import StockModal from '../components/StockModal';
import { DeleteStockStatus } from '../components/StockStatus';
import { GetStockAnalysisStatus } from '../components/StockStatus';
import StockToolbar from '../components/StockToolbar';

const StocksIndexView = () => {
  console.log('StocksIndexView');
  return (
    <Page className="container" title="Stocks">
      <h3 className="mt-3">Stocks1: </h3>
      {/* <StockToolbar /> */}
      <DeleteStockStatus />
      <GetStockAnalysisStatus />
      <StockTable />
      <StockModal />
    </Page>
  );
};

export default StocksIndexView;
