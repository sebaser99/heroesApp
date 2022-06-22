import { mount } from "enzyme"
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../components/auth/authContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../components/types/types"

const mockNavigate = jest.fn()

    jest.mock('react-router-dom', ()=> ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: ()=> mockNavigate
        }
    ))


describe('vamos a probar el <LoginScreen />', ()=>{
    

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false

        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes >
                    <Route path='/login'     element={<LoginScreen/>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>)

        test('debe hacer match con el snapshot', ()=>{
            expect(wrapper).toMatchSnapshot()
        })
        test('debe realizar el dispatch y la navegación', ()=>{
             const handleClick = wrapper.find('button').prop('onClick');
             handleClick();
            expect(contextValue.dispatch).toHaveBeenCalledWith({
                type: types.login,
                payload:{
                    name: "Sebastian Rodriguez"
                }
            })

            expect(mockNavigate).toHaveBeenCalledWith('/marvel', {replace: true})

            localStorage.setItem('lastLocation', '/dc')
            handleClick()
          
            expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace: true})

        })
})