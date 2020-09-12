import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_PRODUCT
const addProduct = (
    {
        description='sorular',
        note='IA yeni bir bahar basliyor',
        weight= 1,
        ayar= 22,
        iscilik= 0,
        link = 'link'
    } =  {}
) => ({
    type : 'ADD_PRODUCT',
    products : {
        id: uuid(),
        description,
        note,
        weight,
        ayar,
        iscilik,
        link
    }
})
//REMOVE_PRODUCT
const removeProduct = ( { id } ) => ({
    type : 'REMOVE_PRODUCT',
    id
} ) 

//EDIT_PRODUCT
const editProduct = ({id, update}) => ({
    type : 'EDIT_PRODUCT',
    id,
    update
}) 

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
}) 
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SORT_BY_AYAR
const sortByAyar = () => ({
    type: 'SORT_BY_AYAR'
})
//SORT_BY_WEIGHT
const sortByWeight = () =>({
    type: 'SORT_BY_WEIGHT'
})

// Get Visible Expense
const getVisibleProducts = (products, { text, sortBy}) => {
    return products.filter((products) => {
        const textFind = text.toLowerCase();
        const description = products.description.toLowerCase();
        const textMatch = description.includes(textFind);
        return textMatch
}).sort((a,b) => {
    if(sortBy==='ayar'){
        if(a.ayar !== b.ayar) {
            return a.ayar < b.ayar ? 1 : -1
        } else {
            return a.weight < b.weight ? 1 : -1 
        }   
    } else if (sortBy==='weight'){
        return a.weight < b.weight ? 1 : -1
    }
})
}




//PRODUCTSREDUCER
const productsReducerDefaultState = [];
const productsReducer = (state = productsReducerDefaultState, action) => {
    
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.products
            ]
        case 'REMOVE_PRODUCT':
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.update
                    }
                } else {
                    return product
                }
            })
    default:
        return state;
    }
    
}
//FILTERSREDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined 
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_AYAR' :
            return {
                ...state,
                sortBy: 'ayar'
            }    
        case 'SORT_BY_WEIGHT' :
            return {
                ...state,
                sortBy: 'weight'
            }    
    }
    return state;
}


//STORE OLUSTURMA

const store = createStore (
    combineReducers ({
        products : productsReducer,
        filters : filtersReducer
    }))


const productOne = store.dispatch(addProduct({ description: 'yuzuk', note: 'MutluGold', weight : 2, iscilik: 0.1,  ayar: 14,  link: 'asdsad.png'}));
const productTwo = store.dispatch(addProduct({ description: 'kunye', note: 'MutluGold', weight : 12.5, iscilik: 0.2, ayar: 14,  link: 'asdsad2.png'}));
const product= store.dispatch(addProduct())
//store.dispatch(setTextFilter('yuz'))

//store.dispatch(sortByWeight())
store.dispatch(sortByAyar())

const state= store.getState();
console.log(state);

const visibleProducts = getVisibleProducts(state.products,state.filters)
console.log(visibleProducts);



/*store.dispatch(removeProduct({id: productOne.products.id}))
console.log(store.getState())

store.dispatch(editProduct({id: productTwo.products.id , update : {ayar:18}}))
console.log(store.getState())

store.dispatch(setTextFilter())

console.log(store.getState())*/

//DEMO STATE

const demoState = {
    products : [{
        id: 'asdad',
        description:'sorular',
        note:'IA yeni bir bahar basliyor',
        weight: 1041,
        iscilik: 1,
        ayar: 22,
        link: 'asdad.png'
    }],
    
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}