import { createActions } from 'redux-actions';
import { updateStock } from './api';
import { apiGetStocksAction } from '../getStocks/actions';

// ACTION-CREATORS:
export const {
  apiUpdateStockStartAction,
  apiUpdateStockSuccessAction,
  apiUpdateStockFailureAction,
  resetUpdateStockStatusAction
} = createActions(
  'API_UPDATE_STOCK_START_ACTION',
  'API_UPDATE_STOCK_SUCCESS_ACTION',
  'API_UPDATE_STOCK_FAILURE_ACTION',
  'RESET_UPDATE_STOCK_STATUS_ACTION'
);

// ASYCN-ACTION-CREATORS:
export const apiUpdateStockAction = stock => async dispatch => {
  try {
    console.log('apiUpdateStockAction', stock);
    dispatch(apiUpdateStockStartAction(stock));
    const response = await updateStock(stock);
    dispatch(apiUpdateStockSuccessAction(response));
    // refresh:
    dispatch(apiGetStocksAction());
  } catch (e) {
    console.log('apiGetStocksAction:err', e);
    dispatch(apiUpdateStockFailureAction({ error: e.message }));
  }
};
