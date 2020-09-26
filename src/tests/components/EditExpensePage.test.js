import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/Edit';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper ;

beforeEach (() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
        startEditExpense = {startEditExpense} 
        startRemoveExpense = {startRemoveExpense}  
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
   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[1]);

})

test ('should handle onRemove', () => {
    wrapper.find('button').prop('onClick')({id: expenses[0].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
 
 })