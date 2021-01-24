/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import StockForm from './StockForm';
import { StockMutaionStatus } from './StockStatus';
import { apiCreateStockAction } from '../state/createStock/actions';
import { apiUpdateStockAction } from '../state/updateStock/actions';
import { closeStockModalAndResetStatusAction } from '../state/stockModal/actions';

const StockModal = ({
  isOpen,
  stock,
  apiCreateStockAction,
  apiUpdateStockAction,
  onClose
}) => {
  const handleSave = formStock => {
    if (formStock.id) apiUpdateStockAction(formStock);
    else apiCreateStockAction(formStock);
  };

  const toggle = (...args) => {
    console.log('toggle', args);
    onClose();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        backdrop
        keyboard
        contentClassName="bg-light"
      >
        <ModalHeader className="border-0">
          {stock && stock.id ? 'Update Stock' : 'Create Stock'}
        </ModalHeader>
        <ModalBody className="px-5">
          <StockMutaionStatus />
          <StockForm stock={stock} onSave={handleSave} onCancel={onClose} />
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  isOpen: state.stockState.stockModal.isOpen,
  stock: state.stockState.stockModal.stock
});

const mapDispatchToProps = {
  apiCreateStockAction,
  apiUpdateStockAction,
  onClose: closeStockModalAndResetStatusAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(StockModal));
