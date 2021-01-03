import React from 'react';
import { connect } from 'react-redux';

export const StockAlert = ({ createStock, updateStock, deleteStock }) => {
  if (createStock.loading) return <div>Creating Stock...</div>;
  if (createStock.success) return <div>Stock Created Successfully</div>;
  if (createStock.error) return <div>Failed to Create Stock</div>;
  if (updateStock.loading) return <div>Updating Stock...</div>;
  if (updateStock.success) return <div>Stock Updated Successfully</div>;
  if (updateStock.error) return <div>Failed to Update Stock</div>;
  if (deleteStock.loading) return <div>Deleting Stock...</div>;
  if (deleteStock.success) return <div>Stock Deleted Successfully</div>;
  if (deleteStock.error) return <div>Failed to Delete Stock</div>;
  //   return <div>{JSON.stringify(createStock)}</div>;
  return null;
};

const mapStateToProps = state => ({
  createStock: state.stockState.createStock,
  updateStock: state.stockState.updateStock,
  deleteStock: state.stockState.deleteStock
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StockAlert);
