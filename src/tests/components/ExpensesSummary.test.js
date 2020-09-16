import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should test ExpensesSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {12}/>);
    expect(wrapper).toMatchSnapshot()

})


test('should test ExpensesSummary with  multiple expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {123245655}/>);
    expect(wrapper).toMatchSnapshot()

})