import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../components/Header';
import ExpendDashboardPage from './../components/ExpendDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import Edit from './../components/Edit';
import Help from './../components/Help';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpendDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit:id" component={Edit} />
        <Route path="/help" component={Help}/>
        <Route component={NotFoundPage}/>
      </Switch>
      </div>     
    </BrowserRouter>
)

export default AppRouter;