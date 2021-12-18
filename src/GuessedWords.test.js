import React from 'react';
import {shallow} from "enzyme";
import {findBytestAttr, checkProps} from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3}
    ],
};


/**
 * Functional react component for guessedWords message
 * @function
 * @param {object} props -react props
 * @return {shallowWrapper}
 */

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    })
    test('render without error', () => {
        const component = findBytestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    });
    test('render instructions to guess a word', () => {
        const instructions = findBytestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {

});