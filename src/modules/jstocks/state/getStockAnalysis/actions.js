//------------------ Actions -------------
import { createActions } from 'redux-actions';
import { getStockAnalysis } from './api';
import { apiGetStocksAction } from '../getStocks/actions';

// ACTION-CREATORS:
export const {
  // FETCH_STOCKS:
  apiGetStockAnalysisStartAction,
  apiGetStockAnalysisSuccessAction,
  apiGetStockAnalysisFailureAction
} = createActions(
  // FETCH_STOCKS:
  'API_GET_STOCK_ANALYSIS_START_ACTION',
  'API_GET_STOCK_ANALYSIS_SUCCESS_ACTION',
  'API_GET_STOCK_ANALYSIS_FAILURE_ACTION'
);

// ASYCN-ACTION-CREATORS:
export const apiGetStockAnalysisAction = stocks => async (
  dispatch,
  getState
) => {
  try {
    const {
      stocks: { data: stocks }
    } = getState().stockState;
    console.log('apiGetStockAnalysisAction', stocks);
    if (stocks && stocks.length > 0) {
      dispatch(apiGetStockAnalysisStartAction(stocks));
      const response = await getStockAnalysis(stocks);
      dispatch(apiGetStockAnalysisSuccessAction(response));

      if (response) {
        // REFRESH-STOCKS:
        dispatch(apiGetStocksAction({ isFetchExtDone: true }));
      }
    }
  } catch (e) {
    console.log('apiGetStockAnalysisAction:err', e);
    dispatch(apiGetStockAnalysisFailureAction({ error: e.message }));
  }
};
