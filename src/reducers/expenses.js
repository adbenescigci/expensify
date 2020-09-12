// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
