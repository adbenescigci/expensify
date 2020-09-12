import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description='', 
        note='', 
        amount = 0 , 
        createdAt = 0 
      } = {}
    ) => ({
    type:'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ( { id } ) => ({ 
    type: 'REMOVE_EXPENSE',
    id
    }) 
//EDIT_EXPENSE

const editExpense = ( id,update ) => ({
    type: 'EDIT_EXPENSE',
    id,
    update

})

// SET_TEXT_FILTER

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

//SET_START_DATE

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expenses
            ]
        case 'REMOVE_EXPENSE' : 
            return state.filter(({id}) => {
               return id !== action.id
            })

        case 'EDIT_EXPENSE' :
            return state.map((expenses)=> {
                if(expenses.id === action.id) {
                    return {
                        ...expenses,
                        ...action.update
                    }
                }else {
                    return expenses
                }
            })
        default:
            return state
    }
}

//  Filter Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return  {
                    ...state,
                    text: action.text
                } 
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE' : 
            return {
                ...state,
                endDate: action.endDate
            }
        default :
            return state
    }
}

// Get Visible Expense
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt ;
    const text1 = text.toLowerCase();
    const description = expense.description.toLowerCase();
    const textMatch = description.includes(text1);

    return startDateMatch && endDateMatch && textMatch
}).sort((a,b)=>{
    if (sortBy==='date'){
        return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy==='amount'){
        return a.amount < b.amount ? 1 : -1
    }
})
};
// Store olusturma

const store = createStore (
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    }))


store.subscribe( () => { 
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log( visibleExpenses ) 
} )

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

//store.dispatch(removeExpense({id: expenseOne.expenses.id}));
//store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500}));

//store.dispatch(setTextFilter('re'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(10));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(250));



const  demoState = {
    expenses : [{
        id: 'asdad',
        description:'bu aciklama ',
        note:'IA yeni bir bahar basliyor',
        amount: 1041,
        createdAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

