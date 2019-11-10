import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/users" component={ UsersList } />
      </Switch>
    </div>
  )
}

export default Routes;