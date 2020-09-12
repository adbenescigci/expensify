import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItems from './ExpensesListItems';
import Selection from '../selectors/expenses'

export const ExpensesList = (props) => (
    <div>
        <h1> ExpensesList </h1>
      {
        props.expenses.length === 0 ? (
              <p>There is no expenses </p>
        ) : (
            props.expenses.map((expense)=>{
                return  <ExpensesListItems key= {expense.id} {...expense}/>
          }
        ))
     }
    </div>
)

const mapStateProps = (state) => {
    return {
        expenses : Selection ( state.expenses, state.filters)
    }
};

export default connect(mapStateProps)(ExpensesList);


 