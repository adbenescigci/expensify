import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/Edit';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper ;

beforeEach (() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
        editExpense = {editExpense} 
        removeExpense = {removeExpense}  
        expense = {expenses[0]} 
        history = {history} 
    />
    );
})

test ('should test render AddExpensePage correctly', ()=>{
    expect (wrapper).toMatchSnapshot()
})

test ('should handle onEdit', () => {
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[1]);

})

test ('should handle onRemove', () => {
    wrapper.find('button').prop('onClick')({id: expenses[0].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
 
 })