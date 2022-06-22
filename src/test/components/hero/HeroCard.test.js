import { shallow } from "enzyme";
import { HeroCard } from "../../../components/hero/HeroCard";

describe('vamos a probar <HeroCard />', ()=>{
    test('debe hacer match con el snapshot', ()=>{
        const hero = {
            'id': 'dc-batman',
            'superhero':'Batman', 
            'publisher':'DC Comics', 
            'alter_ego':'Bruce Wayne',
            'first_appearance':'Detective Comics #27',
            'characters':'Bruce Wayne'
        }
        
        const wrapper = shallow(<HeroCard  id={hero.id}
            superhero={hero.superhero} publisher={hero.publisher}
            alter_ego={hero.alter_ego} first_appearance={hero.first_appearance}
            characters={hero.characters}
        />)
        expect(wrapper).toMatchSnapshot()
    })
    
})