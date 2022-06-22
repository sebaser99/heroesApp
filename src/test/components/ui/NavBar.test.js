import { mount } from "enzyme"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "../../../components/auth/authContext"
import { types } from "../../../components/types/types";
import { Navbar } from "../../../components/ui/NavBar"

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
})) 

describe('vamos a probar el <NavBar />', ()=>{
    const contextValue ={
        dispatch : jest.fn(),
        user: {
            name: 'Sebastian'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue} >
            <MemoryRouter initialEntries={['/']}>
                <Routes >
                    <Route path='/' element={<Navbar />} />
                </Routes>
            </MemoryRouter>    
        </AuthContext.Provider>)

    test('debe hacer match con el snapshot', ()=>{
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Sebastian')
    })

    test('debe llamar el logout', ()=>{
        wrapper.find('button').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalledWith({'type': types.logout, 'payload': {}})

        expect(mockNavigate).toHaveBeenCalledWith('/login', {"replace": true})
    })
})