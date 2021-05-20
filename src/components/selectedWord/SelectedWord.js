import { useContext } from 'react';
import { WordContext } from '../../context/wordContext';
import './SelectedWord.css';

const SelectedWord = () => {
  const { underscoredWord } = useContext(WordContext);

  return (
    <div className='selected-word'>
      {underscoredWord && underscoredWord.map((l, index) => {
        return <div className='word-letter' key={index}>{l}</div>
        /*if (letterRegex.test(l)) {
          return <div className='word-letter' key={index}>_</div>
        }
        else {
          if (l === ' ') return <div className='word-letter' key={index}>&nbsp;</div>
          else return <div className='word-letter' key={index}>{l}</div>
        }*/
      })}
    </div>
  )
}

export default SelectedWord;