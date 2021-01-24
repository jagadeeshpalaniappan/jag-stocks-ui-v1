import React, { memo } from 'react';
import ListItem from './ListItem';

const List = memo(function List({ stocks }) {
  return (
    <ul className="list-group">
      {stocks && stocks.map(stock => <ListItem key={stock.id} stock={stock} />)}
    </ul>
  );
});

export default List;
