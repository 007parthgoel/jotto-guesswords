/**
 * @method getLetterMatchCount
 * @param guessedWord
 * @param secretWord
 * @returns {number}- number of letters matched between guessedWord and secret word
 */

export function getLetterMatchCount(guessedWord,secretWord){
    const secretLetters=secretWord.split('');
    const guessedLetterSet=new Set(guessedWord);
    return secretLetters.filter(letter=>guessedLetterSet.has(letter)).length;
}