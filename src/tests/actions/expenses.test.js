import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense',() => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense',() => {
    const action = editExpense('123abc',{a:'as'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        update:{
            a:'as'
        }
    })
}) 

test('shold setup add expense provided value', () => {
        const addData = {
            description : 'Rent',
            note: 'odeme',
            amount: 109500,
            createdAt: 1000
        }
        const action = addExpense(addData)
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expenses: {
            ...addData,
            id: expect.any(String)    
            }
        })
    })

 test ('should setup add expense default value', () => {
        const defV = {
            description : '',
            note: '',
            amount: 0,
            createdAt: 0

        }
        const action = addExpense()
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                ...defV,
                id: expect.any(String)
            }
            })
        })  

