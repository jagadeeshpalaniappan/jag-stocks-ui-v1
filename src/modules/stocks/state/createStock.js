import { createActions } from 'redux-actions';
import createStock from '../api/createStock';

// ACTION-CREATORS:
export const {
  apiCreateStockStartAction,
  apiCreateStockSuccessAction,
  apiCreateStockFailureAction
} = createActions(
  'API_CREATE_STOCK_START_ACTION',
  'API_CREATE_STOCK_SUCCESS_ACTION',
  'API_CREATE_STOCK_FAILURE_ACTION'
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

// REDUCERS:
export const apiCreateStockStartReducer = (state, action) => {
  console.log('appReducer:apiCreateStockStartReducer', { state, action });
  return {
    ...state,
    createStock: {
      ...state.createStock,
      success: false,
      loading: true,
      error: null
    }
  };
};

export const apiCreateStockSuccessReducer = (state, action) => {
  console.log('appReducer:apiCreateStockSuccessReducer', { state, action });
  return {
    ...state,
    createStock: {
      ...state.createStock,
      success: true,
      loading: false,
      error: null
    }
  };
};
export const apiCreateStockFailureReducer = (state, action) => {
  console.log('appReducer:apiCreateStockFailureReducer', { state, action });
  return {
    ...state,
    createStock: {
      ...state.createStock,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};
