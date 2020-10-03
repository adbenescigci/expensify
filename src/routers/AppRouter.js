import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ExpendDashboardPage from './../components/ExpendDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import Edit from './../components/Edit';
import Help from './../components/Help';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history= {history}>
      <div>
        <Switch>
          <Route path="/" component={LoginPage} exact={true}/>
          <PrivateRoute path="/dashboard" component={ExpendDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage}/>
          <PrivateRoute path="/edit:id" component={Edit} />
          <Route path="/help" component={Help}/>
          <Route component={NotFoundPage}/>
      </Switch>
      </div>     
    </Router>
)

export default AppRouter;