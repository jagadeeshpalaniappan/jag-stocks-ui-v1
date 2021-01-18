// REDUCERS:
export const apiDeleteStockStartReducer = (state, action) => {
  console.log('stockReducer:apiDeleteStockStartReducer', { state, action });
  return {
    ...state,
    deleteStockStatus: {
      ...state.deleteStockStatus,
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
    deleteStockStatus: {
      ...state.deleteStockStatus,
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
    deleteStockStatus: {
      ...state.deleteStockStatus,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};

export const resetDeleteStockStatusReducer = (state, action) => {
  console.log('stockReducer:resetDeleteStockStatusReducer', { state, action });
  return {
    ...state,
    deleteStockStatus: {
      ...state.deleteStockStatus,
      success: false,
      loading: false,
      error: null
    }
  };
};
