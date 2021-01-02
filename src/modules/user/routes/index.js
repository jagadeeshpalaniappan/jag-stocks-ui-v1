import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { basePath } from "../../../app/AppRoutes";
import CreateUserView from '../views/CreateUser';
import EditUserView from '../views/EditUser';
import UserDetailsView from '../views/UserDetails';
import UsersView from '../views/Users';

const UserRoutes = () => {
  return (
    <Switch>
      <Route exact path={'users'}>
        <UsersView />
      </Route>
      <Route path={`users/create`}>
        <CreateUserView />
      </Route>
      <Route path={`users/edit/:id`}>
        <EditUserView />
      </Route>
      <Route path={`users/:id`}>
        <UserDetailsView />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
