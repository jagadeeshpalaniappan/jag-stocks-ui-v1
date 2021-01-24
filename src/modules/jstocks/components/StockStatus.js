import React, { useState } from 'react';
import { connect } from 'react-redux';

import { resetCreateStockStatusAction } from '../state/createStock/actions';
import { resetDeleteStockStatusAction } from '../state/deleteStock/actions';
import { resetUpdateStockStatusAction } from '../state/updateStock/actions';

const StatusMsg = ({ children, success, error, onClose }) => {
  let status = 'alert-primary';
  if (success) status = 'alert-success';
  if (error) status = 'alert-danger';

  return (
    <div className={`alert alert-dismissible fade show ${status}`} role="alert">
      {children}
      {(success || error) && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const CreateStockStatus = connect(
  state => ({ createStockStatus: state.stockState.createStockStatus }),
  { resetCreateStockStatusAction }
)(({ createStockStatus, resetCreateStockStatusAction }) => {
  console.log('CreateStockStatus');
  return (
    <>
      {createStockStatus.loading && (
        <StatusMsg onClose={resetCreateStockStatusAction}>
          Creating Stock...
        </StatusMsg>
      )}
      {createStockStatus.success && (
        <StatusMsg success onClose={resetCreateStockStatusAction}>
          Stock Created Successfully
        </StatusMsg>
      )}
      {createStockStatus.error && (
        <StatusMsg error onClose={resetCreateStockStatusAction}>
          Failed to Create Stock
        </StatusMsg>
      )}
    </>
  );
});

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const UpdateStockStatus = connect(
  state => ({ updateStockStatus: state.stockState.updateStockStatus }),
  { resetUpdateStockStatusAction }
)(({ updateStockStatus, resetUpdateStockStatusAction }) => {
  console.log('UpdateStockStatus');
  return (
    <>
      {updateStockStatus.loading && (
        <StatusMsg onClose={resetUpdateStockStatusAction}>
          Updating Stock...
        </StatusMsg>
      )}
      {updateStockStatus.success && (
        <StatusMsg success onClose={resetUpdateStockStatusAction}>
          Stock Updated Successfully
        </StatusMsg>
      )}
      {updateStockStatus.error && (
        <StatusMsg error onClose={resetUpdateStockStatusAction}>
          Failed to Update Stock
        </StatusMsg>
      )}
    </>
  );
});

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const DeleteStockStatus = connect(
  state => ({ deleteStockStatus: state.stockState.deleteStockStatus }),
  { resetDeleteStockStatusAction }
)(({ deleteStockStatus, resetDeleteStockStatusAction }) => {
  console.log('DeleteStockStatus');
  return (
    <>
      {deleteStockStatus.loading && (
        <StatusMsg onClose={resetDeleteStockStatusAction}>
          Deleting Stock...
        </StatusMsg>
      )}
      {deleteStockStatus.success && (
        <StatusMsg success onClose={resetDeleteStockStatusAction}>
          Stock Deleted Successfully
        </StatusMsg>
      )}
      {deleteStockStatus.error && (
        <StatusMsg error onClose={resetDeleteStockStatusAction}>
          Failed to Delete Stock
        </StatusMsg>
      )}
    </>
  );
});

export const StockMutaionStatus = () => {
  return (
    <>
      <CreateStockStatus />
      <UpdateStockStatus />
    </>
  );
};

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const StockListStatus = connect(
  state => ({ stocks: state.stockState.stocks }),
  null
)(({ stocks }) => {
  console.log('StockListStatus');
  if (stocks.loading)
    return (
      <div className="d-flex justify-content-center py-4">
        Loading Stocks...
      </div>
    );
  if (stocks.error)
    return <StatusMsg error>Error when getting Stocks</StatusMsg>;

  return null;
});

// connect(mapStateToProps, mapDispatchToProps)(MyComp);
export const GetStockAnalysisStatus = connect(
  state => ({
    getStockAnalysisStatus: state.stockState.getStockAnalysisStatus
  }),
  null
)(({ getStockAnalysisStatus }) => {
  console.log('StockListStatus');
  if (getStockAnalysisStatus.loading)
    return (
      <div className="d-flex justify-content-center py-4">
        Getting Stocks Details...
      </div>
    );
  if (getStockAnalysisStatus.error)
    return <StatusMsg error>Error when getting Stocks Details</StatusMsg>;

  return null;
});
