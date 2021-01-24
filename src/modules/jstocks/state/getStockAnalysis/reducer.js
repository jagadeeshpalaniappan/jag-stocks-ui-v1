// REDUCERS:
export const apiGetStockAnalysisStartReducer = (state, action) => {
  console.log('stockReducer:apiGetStockAnalysisStartReducer', {
    state,
    action
  });
  return {
    ...state,
    getStockAnalysisStatus: {
      ...state.getStockAnalysisStatus,
      success: false,
      loading: true,
      error: null
    }
  };
};
export const apiGetStockAnalysisSuccessReducer = (state, action) => {
  console.log('stockReducer:apiGetStockAnalysisSuccessReducer', {
    state,
    action
  });
  return {
    ...state,
    getStockAnalysisStatus: {
      ...state.getStockAnalysisStatus,
      success: true,
      loading: false,
      error: null
    }
  };
};
export const apiGetStockAnalysisFailureReducer = (state, action) => {
  console.log('stockReducer:apiGetStockAnalysisFailureReducer', {
    state,
    action
  });
  return {
    ...state,
    getStockAnalysisStatus: {
      ...state.getStockAnalysisStatus,
      success: false,
      loading: false,
      error: action.payload.error
    }
  };
};
