import { handleActions } from 'redux-actions';
import { v4 as uuid } from 'uuid';

import {
  apiGetStocksStartAction,
  apiGetStocksSuccessAction,
  apiGetStocksFailureAction
} from './getStocks/actions';

import {
  apiGetStocksStartReducer,
  apiGetStocksSuccessReducer,
  apiGetStocksFailureReducer
} from './getStocks/reducer';

import {
  apiCreateStockStartAction,
  apiCreateStockSuccessAction,
  apiCreateStockFailureAction
} from './createStock/actions';

import {
  apiCreateStockStartReducer,
  apiCreateStockSuccessReducer,
  apiCreateStockFailureReducer
} from './createStock/reducer';

import {
  apiDeleteStockStartAction,
  apiDeleteStockSuccessAction,
  apiDeleteStockFailureAction
} from './deleteStock/actions';

import {
  apiDeleteStockStartReducer,
  apiDeleteStockSuccessReducer,
  apiDeleteStockFailureReducer
} from './deleteStock/reducer';

//------------------ Reducers -------------

const defaultState = {
  counter: 0,
  todos: [
    { id: uuid(), name: 'Todo 1' },
    { id: uuid(), name: 'Todo 2' }
  ],
  stocks: {
    data: [],
    loading: false,
    error: null
  },
  stock: {
    data: [],
    loading: false,
    error: null
  },
  createStock: {
    success: false,
    loading: false,
    error: null
  },
  updateStock: {
    success: false,
    loading: false,
    error: null
  },
  deleteStock: {
    success: false,
    loading: false,
    error: null
  }
};

export const stockReducer = handleActions(
  {
    // GET_STOCKS:
    [apiGetStocksStartAction]: apiGetStocksStartReducer,
    [apiGetStocksSuccessAction]: apiGetStocksSuccessReducer,
    [apiGetStocksFailureAction]: apiGetStocksFailureReducer,

    // CREATE_STOCK
    [apiCreateStockStartAction]: apiCreateStockStartReducer,
    [apiCreateStockSuccessAction]: apiCreateStockSuccessReducer,
    [apiCreateStockFailureAction]: apiCreateStockFailureReducer,

    // DELETE_STOCK
    [apiDeleteStockStartAction]: apiDeleteStockStartReducer,
    [apiDeleteStockSuccessAction]: apiDeleteStockSuccessReducer,
    [apiDeleteStockFailureAction]: apiDeleteStockFailureReducer
  },
  defaultState
);
