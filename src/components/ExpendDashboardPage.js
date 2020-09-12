import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters' ;


const ExpendDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpensesList/>
        
    </div>
)

export default ExpendDashboardPage;