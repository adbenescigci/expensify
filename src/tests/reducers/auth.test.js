import authReducer from '../../reducers/auth';

test('should set default state', ()=>{
    const state = authReducer(undefined,{ type:'@@INIT'})
    expect(state).toEqual({});
})

test('should set uid for login',()=>{
    const action = {
        type: 'LOGIN',
        uid: '1'
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid)
})

test('should clear uid with action',()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything '}, action);
    expect(state).toEqual( { } )
})