import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItems from '../../components/ExpensesListItems';
import expenses from '../fixtures/expenses';

test('should render ExpensesListItems with one expense', ()=>{
    const wrapper = shallow(<ExpensesListItems {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})