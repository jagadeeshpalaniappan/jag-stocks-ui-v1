import { createActions } from 'redux-actions';
import { resetCreateStockStatusAction } from '../createStock/actions';
import { resetUpdateStockStatusAction } from '../updateStock/actions';

// ACTION-CREATORS:
export const { openStockModalAction, closeStockModalAction } = createActions(
  'OPEN_STOCK_MODAL_ACTION',
  'CLOSE_STOCK_MODAL_ACTION'
);

export const closeStockModalAndResetStatusAction = () => dispatch => {
  console.log('closeStockModalAndResetStatusAction');
  dispatch(closeStockModalAction());
  dispatch(resetCreateStockStatusAction());
  dispatch(resetUpdateStockStatusAction());
};
