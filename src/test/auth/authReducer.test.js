import {authReducer} from '../../../src/components/auth/authReducer';
import { types } from '../../components/types/types';


describe('vamos a probar el <authReducer />', ()=>{
    test('debe retornar el estado inicial si action = {}', ()=>{
        const action = {}

        const state = authReducer({logged: false}, action)

        expect(state).toEqual({
            logged: false
        })
    })
    test('debe retornar el nombre cuando en el action type: login', ()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'Sebastian'
            }
        }

        const state = authReducer({logged: false}, action)
       
        expect(state).toEqual({
            logged: true,
            name: 'Sebastian'
        })
    })
    test('debe retornar false en el action type: logout', ()=>{
        const action = {
            type: types.logout
        }

        const state = authReducer({logged: false}, action)
       
        expect(state).toEqual({
            logged: false,
           
        })
    })
})