import { useContext } from 'react';
import { WordContext } from '../../context/wordContext';
import './ProposedLetters.css';

const ProposedLetters = () => {
  const { word } = useContext(WordContext);
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const checkLetter = letter => {
    if (word.indexOf(letter) === -1) {

    } else {
      const divLetters = document.getElementsByClassName('word-letter');
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) divLetters[i].innerHTML = letter;
      }
    }
  }

  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <button className='letter-button' key={index} onClick={() => checkLetter(letter)}>{letter}</button>
      })}
    </div>
  )
}

export default ProposedLetters;