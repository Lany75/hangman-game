import { useContext } from 'react';
import { WordContext } from '../../context/wordContext';
import './SelectedWord.css';

const SelectedWord = () => {
  const { word } = useContext(WordContext);
  const letterRegex = /[A-Z]/

  return (
    <div className='selected-word'>
      {word && word.map((l, index) => {
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