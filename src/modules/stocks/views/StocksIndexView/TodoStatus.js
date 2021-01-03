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
    createStockStatus: state.stockState.createStockStatus
  }),
  dispatch => {
    return {
      resetCreateStockStatus: () => dispatch(resetCreateStockStatusAction())
    };
  }
)(({ createStockStatus, resetCreateStockStatus }) => {
  console.log('CreateTodoStatus');
  return (
    <>
      {createStockStatus.loading && (
        <StatusMsg onClose={resetCreateStockStatus}>
          Creating Stock...
        </StatusMsg>
      )}
      {createStockStatus.success && (
        <StatusMsg success onClose={resetCreateStockStatus}>
          Stock Created Successfully
        </StatusMsg>
      )}
      {createStockStatus.error && (
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
    updateStockStatus: state.stockState.updateStockStatus
  }),
  dispatch => {
    return {
      resetUpdateStockStatus: () => dispatch(resetUpdateStockStatusAction())
    };
  }
)(({ updateStockStatus, resetUpdateStockStatus }) => {
  console.log('UpdateTodoStatus');
  return (
    <>
      {updateStockStatus.loading && (
        <StatusMsg onClose={resetUpdateStockStatus}>
          Updating Stock...
        </StatusMsg>
      )}
      {updateStockStatus.success && (
        <StatusMsg success onClose={resetUpdateStockStatus}>
          Stock Updated Successfully
        </StatusMsg>
      )}
      {updateStockStatus.error && (
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
    deleteStockStatus: state.stockState.deleteStockStatus
  }),
  dispatch => {
    return {
      resetDeleteStockStatus: () => dispatch(resetDeleteStockStatusAction())
    };
  }
)(({ deleteStockStatus, resetDeleteStockStatus }) => {
  console.log('DeleteTodoStatus');
  return (
    <>
      {deleteStockStatus.loading && (
        <StatusMsg onClose={resetDeleteStockStatus}>
          Deleting Stock...
        </StatusMsg>
      )}
      {deleteStockStatus.success && (
        <StatusMsg success onClose={resetDeleteStockStatus}>
          Stock Deleted Successfully
        </StatusMsg>
      )}
      {deleteStockStatus.error && (
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
