import { mount } from "enzyme";
import { AuthContext } from "../../components/auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('vamos a hacer pruebas en <AppRouter />', ()=>{
    

    test('debe mostrar el login si el logged: false', ()=>{
        const contextValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen')
    })

    test('debe mostrar un componente si el logged: true', ()=>{
        const contextValue = {
            user: {
                logged: true
            }
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})