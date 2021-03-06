import './App.css';

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import {getSecretWord} from "./actions";
import {useEffect} from "react";

function App() {

    //TODO: get props from shared state
    const success = false;
    const secretWord = 'party';
    const guessedWords = [];

    useEffect(() => {
        getSecretWord();
    }, []);

    return (
        <div data-test="app-component" className="container">
            <h1>Jotto</h1>
            <Congrats success={success}/>
            <Input secretWord={secretWord} success={success}/>
            <GuessedWords guessedWords={guessedWords}/>
        </div>
    );
}

export default App;
