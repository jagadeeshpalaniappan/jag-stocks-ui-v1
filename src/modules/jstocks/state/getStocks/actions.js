//------------------ Actions -------------
import { createActions } from 'redux-actions';
import { getStocks } from './api';
import { apiGetStockAnalysisAction } from '../getStockAnalysis/actions';

// ACTION-CREATORS:
export const {
  // GET_STOCKS:
  apiGetStocksStartAction,
  apiGetStocksSuccessAction,
  apiGetStocksFailureAction
} = createActions(
  // GET_STOCKS:
  'API_GET_STOCKS_START_ACTION',
  'API_GET_STOCKS_SUCCESS_ACTION',
  'API_GET_STOCKS_FAILURE_ACTION'
);

// ASYCN-ACTION-CREATORS:
export const apiGetStocksAction = config => async (dispatch, getState) => {
  try {
    console.log('apiGetStocksAction', config);
    dispatch(apiGetStocksStartAction(config));
    const response = await getStocks(config);
    dispatch(apiGetStocksSuccessAction(response));

    // FETCH-EXT-STOCKS:
    if (!(config && config.isFetchExtDone))
      dispatch(apiGetStockAnalysisAction());
  } catch (e) {
    console.log('apiGetStocksAction:err', e);
    dispatch(apiGetStocksFailureAction({ error: e.message }));
  }
};
