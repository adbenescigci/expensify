import {
    startAddExpense, 
    addExpense, 
    removeExpense, 
    startRemoveExpense,
    editExpense,
    startEditExpense, 
    setExpenses, 
    startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData= {};
    expenses.forEach(({ id, description, note, amount, createdAt})=>{
        expensesData[id] = {description, note, amount, createdAt};
    })
    database.ref('expenses').set(expensesData).then(()=> done())
})


test('should setup remove expense',() => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expense from firebase' , (done) => {
    
    const store = createMockStore({});

    store.dispatch(startRemoveExpense({ id : expenses[2].id })).then(()=>{ 
      
        const actions =store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id: expenses[2].id
            }) 
       return database.ref(`expenses/${ expenses[2].id}`).once('value')
          
    }).then((snapshot)=> {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('should setup edit expense',() => {
    const action = editExpense('123abc',{note:'as'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        update:{
            note:'as'
        }
    })
}) 

test('should edit in firebase', ( done )=>{
    
    const store = createMockStore({});
    const id = expenses[1].id
    const update ={
        amount: 150
    }
    store.dispatch(startEditExpense(id,update)).then(()=>{
        const action= store.getActions();
        expect(action[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id ,
            update
        }) 
        return database.ref(`expenses/${ id }`).once('value')
      
    }).then((snapshot)=>{ 
        expect(snapshot.val().amount).toEqual(update.amount)
        done()})

})


test('shold setup add expense provided value', () => {
        const action = addExpense(expenses[2])
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expenses: expenses[2]
        })
    });

test('should add expense to database and store', (done)=>{
    const store = createMockStore();
    const expenseData = {
        description: 'Mouse',
        amount:3000,
        note: 'this is one',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseData
            }
        });

            return database.ref(`expenses/${actions[0].expenses.id}`).once('value')
        }).then ((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done(); 
          })
       }) 
   


test('should add expense with defaults to database and store', (done)=>{
const store = createMockStore();
    const expenseDefault = {
        description:'', 
        note:'', 
        amount : 0 , 
        createdAt : 0
    }
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
            return database.ref(`expenses/${actions[0].expenses.id}`).once('value')
        }).then ((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefault);
            done(); 
    })
})

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then (()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })  
        done(); 
    })

})

