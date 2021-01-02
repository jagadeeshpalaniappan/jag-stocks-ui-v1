//------------------ Actions -------------
import { createActions } from 'redux-actions';
import getStocks from '../api/getStocks';

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

// REDUCERS:
export const apiGetStocksStartReducer = (state, action) => {
  console.log('appReducer:apiGetStocksStartReducer', { state, action });
  return {
    ...state,
    stocks: {
      ...state.stocks,
      data: [],
      loading: true,
      error: null
    }
  };
};
export const apiGetStocksSuccessReducer = (state, action) => {
  console.log('appReducer:apiGetStocksSuccessReducer', { state, action });
  return {
    ...state,
    stocks: {
      ...state.stocks,
      data: action.payload.data,
      loading: false,
      error: null
    }
  };
};
export const apiGetStocksFailureReducer = (state, action) => {
  console.log('appReducer:apiGetStocksFailureReducer', { state, action });
  return {
    ...state,
    stocks: {
      ...state.stocks,
      loading: false,
      error: action.payload.error
    }
  };
};
