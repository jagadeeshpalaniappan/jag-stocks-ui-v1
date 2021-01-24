import React from 'react';
import { connect } from 'react-redux';
import { openStockModalAction } from '../../state/stockModal/actions';

const AddButton = ({ openStockModalAction }) => {
  return (
    <button
      type="button"
      className="btn btn-primary text-nowrap mr-1"
      onClick={() => openStockModalAction()}
    >
      Add Stock
    </button>
  );
};

const mapDispatchToProps = { openStockModalAction };
export default connect(null, mapDispatchToProps)(AddButton);
