import { mount } from "enzyme"
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom"
import { HeroScreen } from "../../../components/hero/HeroScreen"

const mockNavigate = jest.fn()

    jest.mock('react-router-dom', ()=> ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: ()=> mockNavigate
        }
    ))

describe('vamos a probar <HeroScreen />', ()=>{
    

    test('debe hacer match con el snapshot', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim()).toBe('No hero page')
    })

    test('debe mostrar un heroe si el parámetro existe y se encuentra', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.row').exists()).toBe(true)
    })

    test('debe regresar a la pantalla anterior', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })

    test('debe mostrar el no hero page', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderman44444']}>
                <Routes>
                    <Route path='/hero/:heroId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.text().trim()).toBe('No hero page')
    })
})