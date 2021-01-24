import React from 'react';
import { connect } from 'react-redux';
import { apiDeleteStockAction } from '../../state/deleteStock/actions';
import { openStockModalAction } from '../../state/stockModal/actions';

const ListItem = ({ stock, apiDeleteStockAction, openStockModalAction }) => {
  console.log('ListItem');
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <span className="mr-2">{stock.stockId}</span>
          <span className="badge badge-light mr-1">{stock.avgPrice}</span>
          <span className="badge badge-light mr-1">{stock.stockname}</span>
          <span className="badge badge-light mr-1">{stock.sex}</span>
          <span className="badge badge-light mr-1">{stock.role}</span>
          {stock.isActive && (
            <span className="badge badge-light mr-1">active</span>
          )}
        </div>
        <div>
          <a
            href="#"
            className="mr-2"
            onClick={() => openStockModalAction(stock)}
          >
            Edit
          </a>
          <a href="#" onClick={() => apiDeleteStockAction(stock)}>
            Delete
          </a>
        </div>
      </li>
    </>
  );
};

const mapDispatchToProps = { apiDeleteStockAction, openStockModalAction };
export default connect(null, mapDispatchToProps)(React.memo(ListItem));
