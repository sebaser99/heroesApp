import { mount } from "enzyme";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../components/auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate: ()=> <span>saliendo de aquí</span>
}))


describe('vamos a probar <PrivateRoutes', ()=>{
    test('debe mostrar el private componente si el logged es true', ()=>{
        const contextValue = {
            user : {
                logged: true,
                name: 'Sebastian'
    
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <PrivateRoute>
                    <h1>Private Component</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>)
    
        console.log(wrapper.html())
        expect(wrapper.text().trim()).toBe('Private Component')
    })

    test('debe mostrar "saliendo de aquí" si el logged es false', ()=>{
        const contextValue = {
            user : {
                logged: false,

            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <PrivateRoute>
                    <h1>Private Component</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>)
    
        console.log(wrapper.html())
        expect(wrapper.text().trim()).toBe('saliendo de aquí')
    })
})