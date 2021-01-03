// REDUCERS:
export const apiUpdateStockStartReducer = (state, action) => {
  console.log('stockReducer:apiUpdateStockStartReducer', { state, action });
  return {
    ...state,
    updateStock: {
      ...state.updateStock,
      success: false,
      loading: true,
      error: null
    }
  };
};

export const apiUpdateStockSuccessReducer = (state, action) => {
  console.log('stockReducer:apiUpdateStockSuccessReducer', { state, action });
  return {
    ...state,
    updateStock: {
      ...state.updateStock,
      success: true,
      loading: false,
      error: null
    }
  };
};
export const apiUpdateStockFailureReducer = (state, action) => {
  console.log('stockReducer:apiUpdateStockFailureReducer', { state, action });
  return {
    ...state,
    updateStock: {
      ...state.updateStock,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};

export const resetUpdateStockStatusReducer = (state, action) => {
  console.log('stockReducer:resetUpdateStockStatusReducer', { state, action });
  return {
    ...state,
    updateStock: {
      ...state.updateStock,
      success: false,
      loading: false,
      error: null
    }
  };
};
