import React, { useState } from 'react';
import { connect } from 'react-redux';

import { resetCreateStockStatusAction } from '../../state/createStock/actions';
import { resetDeleteStockStatusAction } from '../../state/deleteStock/actions';
import { resetUpdateStockStatusAction } from '../../state/updateStock/actions';

const StatusMsg = ({ children, success, error, onClose }) => {
  let status = {};
  if (success) status = { color: 'green' };
  if (error) status = { color: 'red' };

  return (
    <div
      style={{
        backgroundColor: '#eee',
        padding: 10,
        margin: '10px 0',
        display: 'flex',
        ...status
      }}
    >
      <div>{children}</div>
      <div style={{ flexGrow: 1 }}></div>
      <div>
        <a href="#" onClick={onClose}>
          x
        </a>
      </div>
    </div>
  );
};

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const CreateTodoStatus = connect(
  state => ({
    createStock: state.stockState.createStock
  }),
  dispatch => {
    return {
      resetCreateStockStatus: () => dispatch(resetCreateStockStatusAction())
    };
  }
)(({ createStock, resetCreateStockStatus }) => {
  console.log('CreateTodoStatus');
  return (
    <>
      {createStock.loading && (
        <StatusMsg onClose={resetCreateStockStatus}>
          Creating Stock...
        </StatusMsg>
      )}
      {createStock.success && (
        <StatusMsg success onClose={resetCreateStockStatus}>
          Stock Created Successfully
        </StatusMsg>
      )}
      {createStock.error && (
        <StatusMsg error onClose={resetCreateStockStatus}>
          Failed to Create Stock
        </StatusMsg>
      )}
    </>
  );
});

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const UpdateTodoStatus = connect(
  state => ({
    updateStock: state.stockState.updateStock
  }),
  dispatch => {
    return {
      resetUpdateStockStatus: () => dispatch(resetUpdateStockStatusAction())
    };
  }
)(({ updateStock, resetUpdateStockStatus }) => {
  console.log('UpdateTodoStatus');
  return (
    <>
      {updateStock.loading && (
        <StatusMsg onClose={resetUpdateStockStatus}>
          Updating Stock...
        </StatusMsg>
      )}
      {updateStock.success && (
        <StatusMsg success onClose={resetUpdateStockStatus}>
          Stock Updated Successfully
        </StatusMsg>
      )}
      {updateStock.error && (
        <StatusMsg error onClose={resetUpdateStockStatus}>
          Failed to Update Stock
        </StatusMsg>
      )}
    </>
  );
});

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const DeleteTodoStatus = connect(
  state => ({
    deleteStock: state.stockState.deleteStock
  }),
  dispatch => {
    return {
      resetDeleteStockStatus: () => dispatch(resetDeleteStockStatusAction())
    };
  }
)(({ deleteStock, resetDeleteStockStatus }) => {
  console.log('DeleteTodoStatus');
  return (
    <>
      {deleteStock.loading && (
        <StatusMsg onClose={resetDeleteStockStatus}>
          Deleting Stock...
        </StatusMsg>
      )}
      {deleteStock.success && (
        <StatusMsg success onClose={resetDeleteStockStatus}>
          Stock Deleted Successfully
        </StatusMsg>
      )}
      {deleteStock.error && (
        <StatusMsg error onClose={resetDeleteStockStatus}>
          Failed to Delete Stock
        </StatusMsg>
      )}
    </>
  );
});

export const TodoMutaionStatus = () => {
  return (
    <>
      <CreateTodoStatus />
      <UpdateTodoStatus />
      <DeleteTodoStatus />
    </>
  );
};
