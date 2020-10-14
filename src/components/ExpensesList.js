import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItems from './ExpensesListItems';
import Selection from '../selectors/expenses'

export const ExpensesList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'> Expenses </div>
            <div className='show-for-desktop'> Expense </div>
            <div className='show-for-desktop'> Amount </div>
        </div>   
        <div className='list-body'>
        {
            props.expenses.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span> <p>There is no expenses </p> </span>
                </div>
            ) : (
                props.expenses.map((expense)=>{
                    return  <ExpensesListItems key= {expense.id} {...expense}/>
            }
            ))
        }
     </div>
    </div>
)

const mapStateProps = (state) => {
    return {
        expenses : Selection ( state.expenses, state.filters)
    }
};

export default connect(mapStateProps)(ExpensesList);


 