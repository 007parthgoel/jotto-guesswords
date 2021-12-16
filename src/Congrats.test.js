import Enzyme, {shallow} from 'Enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import {findBytestAttr,checkProp} from "../test/testUtils";
import Congrats from './Congrats';

Enzyme.configure({adapter:new EnzymeAdapter});

const defaultProps={success:false};
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props -react props
 * @return {shallowWrapper}
 */

const setup=(props={})=>{
    const setupProps={...defaultProps,...props};
    return shallow(<Congrats {...setupProps}/>)
}

test('render without error',()=>{
    const wrapper=setup();
    const component=findBytestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);

});

test('renders no text when `success` prop is false',()=>{
    const wrapper=setup({success:false});
    const component=findBytestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');

});

test('renders non-empty congrats when `success` prop is true',()=>{
    const wrapper=setup({success:true});
    const message=findBytestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props',()=>{
    const expectedProps={success:false};
    const propError=checkProp(Congrats,expectedProps);
    expect(propError).toBeUndefined();
})