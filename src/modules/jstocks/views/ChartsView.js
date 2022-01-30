import { Box } from '@material-ui/core';
import React from 'react';
import Page from 'src/modules/app/components/Page';
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TradingViewWidget, {
  Themes,
  BarStyles
} from '../components/TradingViewWidget';

const watchlist = ['AAPL', 'IBM', 'TSLA', 'AMD', 'MSFT', 'GOOG'];

const TradingViewChart = () => {
  return (
    <Box height={500} px={2}>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        symbols1={['NASDAQ:MSFT', 'NASDAQ:XOM']}
        symbols={[
          ['Apple', 'AAPL'],
          ['Google', 'NASDAQ:GOOGL'],
          ['Microsoft', 'MSFT']
        ]}
        watchlist={watchlist}
        range="YTD"
        withdateranges
        details
        calendar
        hotlist
        autosize
        allow_symbol_change
        hide_side_toolbar
        theme={Themes.DARK}
        toolbar_bg="#f1f3f6"
        style={BarStyles.LINE}
        locale="en"
        studies={['StochasticRSI@tv-basicstudies', 'MSFT', 'NASDAQ:XOM']}
        // timezone="Etc/UTC"
      />
    </Box>
  );
};

const ChartsView = () => {
  console.log('ChartsView');
  return (
    <Page className="container" title="Stocks">
      <h3 className="mt-3">ChartsView: </h3>
      <TradingViewChart />
    </Page>
  );
};

export default ChartsView;
