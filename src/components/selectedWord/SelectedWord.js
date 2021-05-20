import { useContext } from 'react';
import { WordContext } from '../../context/wordContext';
import './SelectedWord.css';

const SelectedWord = () => {
  const { underscoredWord } = useContext(WordContext);

  return (
    <div className='selected-word'>
      {underscoredWord && underscoredWord.map((l, index) => {
        return <div className='word-letter' key={index}>{l}</div>
      })}
    </div>
  )
}

export default SelectedWord;