import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters' ;
import ExpensesSummary from './ExpensesSummary';


const ExpendDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpensesList/>
    </div>
)

export default ExpendDashboardPage;