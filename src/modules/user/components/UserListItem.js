import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

const UserListItem = ({ item, ...rest }) => {
  console.log('### UserListItem:');
  // let { path } = useRouteMatch();
  return (
    <ListGroupItem tag={NavLink} to={`users/${item.id}`} {...rest}>
      <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
      <ListGroupItemText>
        {Object.keys(item).map(
          key =>
            ['id', 'name'].indexOf(key) === -1 &&
            typeof item[key] === 'string' && (
              <span key={key}>
                {' #'}
                {key}: {item[key]}
              </span>
            )
        )}
      </ListGroupItemText>
    </ListGroupItem>
  );
};

export default React.memo(UserListItem);
