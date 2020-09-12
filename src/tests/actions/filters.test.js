import{setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filter';
import moment from 'moment';

test('should generate set startDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })     
})

test('should generate set endDate',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })   
})

test('should generate sort By Amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort By Date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate text filer provided value', ()=>{
    const action = setTextFilter('as');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'as'
    })
})

test('should generate text filer default value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
