import { useContext } from 'react';

import { GallowsContext } from '../../context/gallowsContext';
import { WordContext } from '../../context/wordContext';
import potence1 from '../../img/potence1.jpg';
import potence2 from '../../img/potence2.jpg';
import potence3 from '../../img/potence3.jpg';
import potence4 from '../../img/potence4.jpg';
import potence5 from '../../img/potence5.jpg';
import potence6 from '../../img/potence6.jpg';

import './ProposedLetters.css';

const ProposedLetters = () => {
  const { word } = useContext(WordContext);
  const { errorCounter, setErrorCounter, setImage } = useContext(GallowsContext);
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const checkLetter = letter => {
    if (word.indexOf(letter) === -1) {
      switch (errorCounter) {
        case 0:
          setImage(potence1);
          break;
        case 1:
          setImage(potence2);
          break;
        case 2:
          setImage(potence3);
          break;
        case 3:
          setImage(potence4);
          break;
        case 4:
          setImage(potence5);
          break;
        case 5:
          setImage(potence6);
          const buttonLetter = document.getElementsByClassName('letter-button');
          for (let i = 0; i < buttonLetter.length; i++) {
            buttonLetter[i].disabled = true;
          }
          break;
        default:
      }
      setErrorCounter(errorCounter + 1);

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