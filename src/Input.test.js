import React from "react";
import {shallow} from "Enzyme";

import {findByTestAttr,checkProps} from "../test/testUtils";
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

const setup=(success=false,secretWord='party')=>{
  return shallow(<Input success={success} secretWord={secretWord}/>);
};


describe('render',()=>{
    describe('success is true', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(true);
        });

        test('Input renders without error', () => {
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('input box does not show',()=>{
            const inputBox=findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button does not show',()=>{
            const submitButton=findByTestAttr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(false);
        })
    });

    describe('success is false', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper=setup(false);
        });
        test('Input renders without error', () => {
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('input box show',()=>{
            const inputBox=findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button show',()=>{
            const submitButton=findByTestAttr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(true);
        })
    });
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
        const inputBox=findByTestAttr(wrapper,"input-box");

        const mockEvent={target:{value:'train'}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    test('field is cleared submit button clicked',()=>{
        const submitButton=findByTestAttr(wrapper,"submit-button");

        // const mockEvent={target:{value:""}};
        submitButton.simulate("click",{preventDefault(){}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
});
