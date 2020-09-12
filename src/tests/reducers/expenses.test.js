import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expensesReducer(undefined,{ type:'@@INIT'})
    expect(state).toEqual([]);
})

test('should remove expense by ID',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if ID does not exist',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})
test('should  add expense',()=>{
    const add ={
        id:'4',
        description:'Credit ',
        note:'',
        amount: 30000 ,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expenses : add
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, add])
})

test('should edit an expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[0].id,
        update: { note:'As'}
    }
    const state = expensesReducer(expenses,action)
   expect(state[0].note).toBe('As')
    /* expect(state).toEqual([{
        ...expenses[0],
        ...action.update
    },expenses[1],expenses[2]])*/
})

test('should not edit expens if expense not found', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id:-1,
        update: { note:'As'}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})