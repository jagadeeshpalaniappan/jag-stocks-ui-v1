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
  apiCreateStockFailureAction,
  resetCreateStockStatusAction
} from './createStock/actions';

import {
  apiCreateStockStartReducer,
  apiCreateStockSuccessReducer,
  apiCreateStockFailureReducer,
  resetCreateStockStatusReducer
} from './createStock/reducer';

import {
  apiUpdateStockStartAction,
  apiUpdateStockSuccessAction,
  apiUpdateStockFailureAction,
  resetUpdateStockStatusAction
} from './updateStock/actions';

import {
  apiUpdateStockStartReducer,
  apiUpdateStockSuccessReducer,
  apiUpdateStockFailureReducer,
  resetUpdateStockStatusReducer
} from './updateStock/reducer';

import {
  apiDeleteStockStartAction,
  apiDeleteStockSuccessAction,
  apiDeleteStockFailureAction,
  resetDeleteStockStatusAction
} from './deleteStock/actions';

import {
  apiDeleteStockStartReducer,
  apiDeleteStockSuccessReducer,
  apiDeleteStockFailureReducer,
  resetDeleteStockStatusReducer
} from './deleteStock/reducer';

import {
  apiGetStockAnalysisStartAction,
  apiGetStockAnalysisSuccessAction,
  apiGetStockAnalysisFailureAction
} from './getStockAnalysis/actions';

import {
  apiGetStockAnalysisStartReducer,
  apiGetStockAnalysisSuccessReducer,
  apiGetStockAnalysisFailureReducer
} from './getStockAnalysis/reducer';

import {
  openStockModalAction,
  closeStockModalAction
} from './stockModal/actions';
import {
  openStockModalReducer,
  closeStockModalReducer
} from './stockModal/reducer';

import { setFilterAction } from './filter/actions';
import { setFilterReducer } from './filter/reducer';

//------------------ Reducers -------------

const defaultState = {
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
  createStockStatus: {
    success: false,
    loading: false,
    error: null
  },
  updateStockStatus: {
    success: false,
    loading: false,
    error: null
  },
  deleteStockStatus: {
    success: false,
    loading: false,
    error: null
  },
  getStockAnalysisStatus: {
    success: false,
    loading: false,
    error: null
  },
  stockModal: {
    isOpen: false,
    stock: null
  },
  filter: {
    active: 'All',
    search: ''
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
    [resetCreateStockStatusAction]: resetCreateStockStatusReducer,

    // UPDATE_STOCK
    [apiUpdateStockStartAction]: apiUpdateStockStartReducer,
    [apiUpdateStockSuccessAction]: apiUpdateStockSuccessReducer,
    [apiUpdateStockFailureAction]: apiUpdateStockFailureReducer,
    [resetUpdateStockStatusAction]: resetUpdateStockStatusReducer,

    // DELETE_STOCK
    [apiDeleteStockStartAction]: apiDeleteStockStartReducer,
    [apiDeleteStockSuccessAction]: apiDeleteStockSuccessReducer,
    [apiDeleteStockFailureAction]: apiDeleteStockFailureReducer,
    [resetDeleteStockStatusAction]: resetDeleteStockStatusReducer,

    // GET_STOCK_ANALYSIS:
    [apiGetStockAnalysisStartAction]: apiGetStockAnalysisStartReducer,
    [apiGetStockAnalysisSuccessAction]: apiGetStockAnalysisSuccessReducer,
    [apiGetStockAnalysisFailureAction]: apiGetStockAnalysisFailureReducer,

    // STOCK_MODAL
    [openStockModalAction]: openStockModalReducer,
    [closeStockModalAction]: closeStockModalReducer,

    // FILTER:
    [setFilterAction]: setFilterReducer
  },
  defaultState
);
