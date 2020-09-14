import React from 'react'; // since there is no glabal tag on scripts 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log('test')
const jsx = (
    <Provider store = {store}>
        <AppRouter/> 
    </Provider>
   
);

ReactDOM.render(jsx,document.getElementById('app'));
