import React from 'react';
import wordList from '../../datas/word-french';
import getRandomInteger from '../../utils/getRandomInteger';

const SelectedWord = () => {
  const randomWord = wordList[getRandomInteger(wordList.length)];

  return (
    <div>
      {randomWord.word}
    </div>
  )
}

export default SelectedWord;