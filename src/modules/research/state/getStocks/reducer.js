// REDUCERS:
export const apiGetStocksStartReducer = (state, action) => {
  console.log('stockReducer:apiGetStocksStartReducer', { state, action });
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
  console.log('stockReducer:apiGetStocksSuccessReducer', { state, action });
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
  console.log('stockReducer:apiGetStocksFailureReducer', { state, action });
  return {
    ...state,
    stocks: {
      ...state.stocks,
      loading: false,
      error: action.payload.error
    }
  };
};
