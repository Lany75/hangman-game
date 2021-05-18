import React from 'react';
import wordList from '../../datas/word-french';
import getRandomInteger from '../../utils/getRandomInteger';
import UnderscoreWord from '../underscoreWord/UnderscoreWord';

const SelectedWord = () => {
  const randomWord = wordList[getRandomInteger(wordList.length)];

  return (
    <div>
      <UnderscoreWord word={randomWord.word} />
    </div>
  )
}

export default SelectedWord;