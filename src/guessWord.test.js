import React from "react";
import {mount} from "enzyme";

import App from "./App";
import {findByTestAttr} from "../test/testUtils";

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 # @function
 * @param {object} state
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 Initial conditions.
 */

const setup = (state = {}) => {
    //TODO: apply state
    const wrapper = mount(<App/>);

    //add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'train'}});

    //simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {
        preventDefault() {
        }
    });

    return wrapper;
}

describe.skip('no words have been guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    })
    test('creates guessedWords table with one row', () => {
        const guessWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessWordNodes).toHaveLength(1);
    })
});

describe.skip('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{
                guessedWord: 'agile',
                letterMatchCount: 1,
            }]
        })
    });
    test('add row in guessedWords table', () => {
        const guessWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessWordNodes).toHaveLength(2)
    });
});

describe.skip('guess secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{guessedWord: 'agile', letterMatchCount: 1}],
        });

        // add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = {target: {value: 'party'}};
        inputBox.simulate('change', mockEvent);

        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', {
            preventDefault() {
            }
        });
    });

    test('add rows to guessedWords table', () => {
        const guessWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessWordNodes).toHaveLength(3);
    });

    test('displays congrats message', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    })

    test('does not displays input component contents', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false);
    });
});