import React from "react";
import {shallow} from "Enzyme";

import {findBytestAttr,checkProps} from "../test/testUtils";
import Input from './Input';

/**
 * Functional react component for input
 * @function
 * @param {object} props -react props
 * @return {shallowWrapper}
 */


const setup=(secretWord='party')=>{
  return shallow(<Input secretWord={secretWord}/>);
};

test('render without error',()=>{
    const wrapper=setup();
    const inputComponent=findBytestAttr(wrapper,'component-input');
    expect(inputComponent.length).toBe(1);
})

test('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord:'party'});
})

describe('state controlled input field',()=>{
    test('state updates with value of input box upon change',()=>{
        const mockSetCurrentGuess=jest.fn();
        React.useState=jest.fn(()=>["",mockSetCurrentGuess]);

        const wrapper=setup();
        const inputBox=findBytestAttr(wrapper,"input-box");

        const mockEvent={target:{value:'train'}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
});