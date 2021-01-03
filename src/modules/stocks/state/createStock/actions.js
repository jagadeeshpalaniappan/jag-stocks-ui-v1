import { createActions } from 'redux-actions';
import { createStock } from './api';

// ACTION-CREATORS:
export const {
  apiCreateStockStartAction,
  apiCreateStockSuccessAction,
  apiCreateStockFailureAction,
  resetCreateStockStatusAction
} = createActions(
  'API_CREATE_STOCK_START_ACTION',
  'API_CREATE_STOCK_SUCCESS_ACTION',
  'API_CREATE_STOCK_FAILURE_ACTION',
  'RESET_CREATE_STOCK_STATUS_ACTION'
);

// ASYCN-ACTION-CREATORS:
export const apiCreateStockAction = stock => async dispatch => {
  try {
    console.log('apiCreateStockAction', stock);
    dispatch(apiCreateStockStartAction(stock));
    const response = await createStock(stock);
    dispatch(apiCreateStockSuccessAction(response));
  } catch (e) {
    console.log('apiGetStocksAction:err', e);
    dispatch(apiCreateStockFailureAction({ error: e.message }));
  }
};
