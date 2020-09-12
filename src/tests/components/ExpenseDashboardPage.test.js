import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpendDashboardPage';

test('should test ExpenseDashBoardPage',() => {
    const wrapper = shallow(<ExpenseDashBoardPage/>);
    expect(wrapper).toMatchSnapshot()
})