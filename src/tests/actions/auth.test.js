import {login, logout} from '../../actions/auth'

test('should generate login action abject', ()=>{
     const uid = 1;
     const action = login(uid)
     expect(action).toEqual({
        type: 'LOGIN' ,
        uid   
    })
})

test('should generate logout action abject', ()=>{
    const action = logout();
    expect(action).toEqual({
       type: 'LOGOUT'
   })
})