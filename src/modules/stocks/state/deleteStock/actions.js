import { createActions } from 'redux-actions';
import { deleteStock } from './api';

// ACTION-CREATORS:
export const {
  apiDeleteStockStartAction,
  apiDeleteStockSuccessAction,
  apiDeleteStockFailureAction
} = createActions(
  'API_DELETE_STOCK_START_ACTION',
  'API_DELETE_STOCK_SUCCESS_ACTION',
  'API_DELETE_STOCK_FAILURE_ACTION'
);

// ASYCN-ACTION-CREATORS:
export const apiDeleteStockAction = stock => async dispatch => {
  try {
    console.log('apiDeleteStockAction', stock);
    dispatch(apiDeleteStockStartAction(stock));
    const response = await deleteStock(stock);
    dispatch(apiDeleteStockSuccessAction(response));
  } catch (e) {
    console.log('apiGetStocksAction:err', e);
    dispatch(apiDeleteStockFailureAction({ error: e.message }));
  }
};
