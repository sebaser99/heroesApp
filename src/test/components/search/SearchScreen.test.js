import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { SearchScreen } from "../../../components/search/SearchScreen"

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
})) 
//este mock lo hago 

describe('vamos a probar <SearchScreen />', ()=>{

    test('debe hacer match con el snapshot', ()=>{
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Realiza una búsqueda')
    })

    test('debe mostrar a batman y el input con el valor del query string', ()=>{
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchScreen />
        </MemoryRouter>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman')
    })

    test('debe mostrar a un mensaje de error al enviar un heroe que no existe', ()=>{
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman444']}>
            <SearchScreen />
        </MemoryRouter>)

        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`No hay resultados ${wrapper.find('input').prop('value')}`)
    })

    test('debe mostrar el llamado de la funcion handleSubmit', ()=>{
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>)

        wrapper.find('input').simulate('change', {
           target: {
               name: 'searchText'   ,
               value: 'batman'
           }
        })
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(mockNavigate).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
    })
})