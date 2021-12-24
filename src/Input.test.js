import React from "react";
import {shallow} from "Enzyme";

import {findBytestAttr,checkProps} from "../test/testUtils";
import Input from './Input';

const defaultProps={};
/**
 * Functional react component for input
 * @function
 * @param {object} props -react props
 * @return {shallowWrapper}
 */


const setup=(secretWord='party')=>{
  // const setupProps={...defaultProps,...props};
  return shallow(<Input secretWord={secretWord}/>);
};

test('render without error',()=>{
    const wrapper=setup();
    const inputComponent=findBytestAttr(wrapper,'component-input');
    expect(inputComponent.length).toBe(1);
})

test('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord:[]});
})
