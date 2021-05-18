import wordList from '../../datas/word-french';
import getRandomInteger from '../../utils/getRandomInteger';
import './SelectedWord.css';

const SelectedWord = () => {
  const randomWord = wordList[getRandomInteger(wordList.length)].word;
  const letters = randomWord.split('');
  const letterRegex = /[a-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]/

  return (
    <div className='selected-word'>
      {letters.map((l, index) => {
        if (letterRegex.test(l)) {
          return <div className='word-letter' key={index}>_</div>
        }
        else {
          if (l === ' ') return <div className='word-letter' key={index}>&nbsp;</div>
          else return <div className='word-letter' key={index}>{l}</div>
        }
      })}
    </div>
  )
}

export default SelectedWord;