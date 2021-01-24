// REDUCERS:

export const openStockModalReducer = (state, action) => {
  console.log('stockReducer:openStockModalReducer', { state, action });
  return {
    ...state,
    stockModal: {
      ...state.stockModal,
      isOpen: true,
      stock: action.payload
    }
  };
};

export const closeStockModalReducer = (state, action) => {
  console.log('stockReducer:closeStockModalReducer', { state, action });
  return {
    ...state,
    stockModal: {
      ...state.stockModal,
      isOpen: false,
      stock: null
    }
  };
};
