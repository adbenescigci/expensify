import {createStore} from 'redux'

const incrementBy = ({incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy,
}) 
const decrementBy = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy 
    }
}
const resetCount = () => ({ type: 'RESET'})
const setCount = ({count}) => {
    return {
        type: 'SET',
        count
    }
 }

const countReducer = (state = { count:0 } , action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            } 
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'SET' :
            return {
                count: action.count,
            }
        case 'RESET' :
            return {
                count: 0
            }
        default :
            return state;
    }
}

const store= createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch(incrementBy())

store.dispatch(incrementBy({incrementBy: 5}))

store.dispatch(resetCount())

store.dispatch(decrementBy())

store.dispatch(decrementBy({decrementBy : 10}))

store.dispatch(setCount({count : 105}))
