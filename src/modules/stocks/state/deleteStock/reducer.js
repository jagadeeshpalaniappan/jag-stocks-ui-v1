// REDUCERS:
export const apiDeleteStockStartReducer = (state, action) => {
  console.log('stockReducer:apiDeleteStockStartReducer', { state, action });
  return {
    ...state,
    deleteStock: {
      ...state.deleteStock,
      success: false,
      loading: true,
      error: null
    }
  };
};

export const apiDeleteStockSuccessReducer = (state, action) => {
  console.log('stockReducer:apiDeleteStockSuccessReducer', { state, action });
  return {
    ...state,
    deleteStock: {
      ...state.deleteStock,
      success: true,
      loading: false,
      error: null
    }
  };
};
export const apiDeleteStockFailureReducer = (state, action) => {
  console.log('stockReducer:apiDeleteStockFailureReducer', { state, action });
  return {
    ...state,
    deleteStock: {
      ...state.deleteStock,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};
