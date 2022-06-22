import { shallow } from 'enzyme';
import {DcScreen} from '../../../components/dc/DcScreen';

describe('vamos a probar el <DcScreen />', ()=>{
    test('debe hacer match con el snapshot', ()=>{
        const wrapper = shallow(<DcScreen />)

        expect(wrapper).toMatchSnapshot()
    })
})