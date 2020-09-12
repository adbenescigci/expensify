import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter reducer', () => {

    const result = filterReducer(undefined,{ type: '@@INIT'})
    expect(result).toEqual({
        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})
test('should set sortBy to amount', ()=>{
    const state = filterReducer(undefined,{ type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sortBy to date', ()=>{
    
    const state = filterReducer( undefined,{ type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})
test('should set text filter', ()=>{
    
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'as'
    }
    const state = filterReducer( undefined, action)
    expect(state.text).toBe('as')
})
test('should set startDate filter',()=>{
    
    const action = {
        type: 'SET_START_DATE',
        startDate :moment(0).add(4,'day')

    }
    const state = filterReducer (undefined, action)
    expect(state.startDate).toEqual(moment(0).add(4,'day'))
})
test('should set endDate filter',()=>{
    
    const action = {
        type: 'SET_END_DATE',
        endDate :moment(0).add(4,'day')

    }
    const state = filterReducer (undefined, action)
    expect(state.endDate).toEqual(moment(0).add(4,'day'))
})