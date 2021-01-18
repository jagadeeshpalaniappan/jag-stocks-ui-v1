import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { apiGetUsersAction } from '../../state/getUsers/actions';
import { UserListStatus } from '../UserStatus';
import List from './List';

export const UserList = ({ users, apiGetUsersAction }) => {
  console.log('UserList');
  useEffect(() => {
    apiGetUsersAction();
  }, [apiGetUsersAction]);
  return (
    <>
      <UserListStatus />
      <List users={users} />
    </>
  );
};

const getUsers = state => state.userState.users.data;
const getFilter = state => state.userState.filter;

// PERFORMANCE-ISSUE-FIXED: // created: MemoizedSelector
// 'users.filter' will be called only if 'state.userState.users.data' changes or 'state.userState.filter' changes
const getVisibleUsers = createSelector(
  [getUsers, getFilter],
  (users, filter) =>
    users &&
    users.filter(user => {
      let activeMatched = true;
      if (filter.active === 'Active') activeMatched = user.isActive;
      if (filter.active === 'InActive') activeMatched = !user.isActive;
      if (filter.active === 'All') activeMatched = true;

      return activeMatched;
    })
);

const mapStateToProps = state => ({ users: getVisibleUsers(state) });
const mapDispatchToProps = { apiGetUsersAction };
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
