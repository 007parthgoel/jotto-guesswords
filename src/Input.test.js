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

// if we most to mock function while destructuring useState
// const mockSetCurrentGuess=jest.fn();
// React.useState=jest.fn(()=>["",mockSetCurrentGuess]);
/*const mockSetCurrentGuess =jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}))*/

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
    let mockSetCurrentGuess=jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState=React.useState;
        React.useState=jest.fn(()=>["",mockSetCurrentGuess]);
        wrapper=setup();
    });
    afterEach(()=>{
        React.useState=originalUseState;
    });

    test('state updates with value of input box upon change',()=>{
        const inputBox=findBytestAttr(wrapper,"input-box");

        const mockEvent={target:{value:'train'}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    test('field is cleared submit button clicked',()=>{
        const submitButton=findBytestAttr(wrapper,"submit-button");

        // const mockEvent={target:{value:""}};
        submitButton.simulate("click",{preventDefault(){}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
});