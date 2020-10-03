import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage}  from  '../../components/LoginPage';
import { startLogout } from '../../actions/auth';

test('should render LoginPage correctly', ()=>{
    
    const wrapper = shallow(<LoginPage startLogin= {() => {}}/>);
    expect(wrapper).toMatchSnapshot();
})

test('shold call startLogin on click', ()=>{
    const startLogin= jest.fn()
    const wrapper = shallow(<LoginPage startLogin= {startLogin}/>)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled()
})