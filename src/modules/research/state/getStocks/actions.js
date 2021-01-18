//------------------ Actions -------------
import { createActions } from 'redux-actions';
import { getStocks } from './api';

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
export const apiGetStocksAction = config => async dispatch => {
  try {
    console.log('apiGetStocksAction', config);
    dispatch(apiGetStocksStartAction(config));
    const response = await getStocks(config);
    dispatch(apiGetStocksSuccessAction(response));
  } catch (e) {
    console.log('apiGetStocksAction:err', e);
    dispatch(apiGetStocksFailureAction({ error: e.message }));
  }
};
