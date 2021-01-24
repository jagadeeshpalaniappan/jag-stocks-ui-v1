// REDUCERS:
export const apiCreateStockStartReducer = (state, action) => {
  console.log('stockReducer:apiCreateStockStartReducer', { state, action });
  return {
    ...state,
    createStockStatus: {
      ...state.createStockStatus,
      success: false,
      loading: true,
      error: null
    }
  };
};

export const apiCreateStockSuccessReducer = (state, action) => {
  console.log('stockReducer:apiCreateStockSuccessReducer', { state, action });
  return {
    ...state,
    createStockStatus: {
      ...state.createStockStatus,
      success: true,
      loading: false,
      error: null
    }
  };
};
export const apiCreateStockFailureReducer = (state, action) => {
  console.log('stockReducer:apiCreateStockFailureReducer', { state, action });
  return {
    ...state,
    createStockStatus: {
      ...state.createStockStatus,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};

export const resetCreateStockStatusReducer = (state, action) => {
  console.log('stockReducer:resetCreateStockStatusReducer', { state, action });
  return {
    ...state,
    createStockStatus: {
      ...state.createStockStatus,
      success: false,
      loading: false,
      error: null
    }
  };
};
