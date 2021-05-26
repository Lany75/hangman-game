import { createContext, useEffect, useState } from "react";

import wordList from '../datas/word-french';
import getRandomInteger from '../utils/getRandomInteger';

export const WordContext = createContext();

function WordProvider({ children }) {
  const [word, setWord] = useState();
  const [underscoredWord, setUnderscoredWord] = useState();

  const getRandomWord = () => {
    let randomWord = wordList[getRandomInteger(wordList.length)].word.toUpperCase();

    while (randomWord === word?.join('')) randomWord = wordList[getRandomInteger(wordList.length)].word.toUpperCase();

    let lettersWord = randomWord.split('');
    lettersWord.forEach((letter, index) => {
      switch (true) {
        case /[àáâãäå]/i.test(letter):
          lettersWord.splice(index, 1, 'A');
          break;
        case /[èéêë]/i.test(letter):
          lettersWord.splice(index, 1, 'E');
          break;
        case /[ìíîï]/i.test(letter):
          lettersWord.splice(index, 1, 'I');
          break;
        case /[ðòóôõö]/i.test(letter):
          lettersWord.splice(index, 1, 'O');
          break;
        case /[ùúûü]/i.test(letter):
          lettersWord.splice(index, 1, 'U');
          break;
        case /[ýÿ]/i.test(letter):
          lettersWord.splice(index, 1, 'Y');
          break;
        case /[ç]/i.test(letter):
          lettersWord.splice(index, 1, 'C');
          break;
        default:
          break;
      }
    })
    setWord(lettersWord);
    getUnderscoredWord(lettersWord);
  }

  const getUnderscoredWord = (word) => {
    const letterRegex = /[A-Z]/;
    let underW = word.map(l => {
      if (letterRegex.test(l)) return '_';
      else return l;
    })
    setUnderscoredWord(underW);
  }

  useEffect(() => {
    getRandomWord();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WordContext.Provider value={{ word, getRandomWord, underscoredWord, setUnderscoredWord }}>
      {children}
    </WordContext.Provider>
  )
}

export default WordProvider;