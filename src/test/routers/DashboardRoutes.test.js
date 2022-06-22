import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../components/auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('vamos a probar <DashboardRoutes />', ()=>{
    const contextValue = {
        user: {
            logged: true,
            name: 'Sebastian'
        }
    }
    test('debe hacer match con el snapshot',()=>{
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Sebastian')
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen')
    })

    test('debe hacer match con el snapshot',()=>{
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Sebastian')
        expect(wrapper.find('h1').text().trim()).toBe('DC Screen')
    })
})