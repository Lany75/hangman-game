import { useContext } from 'react';

import { GallowsContext } from '../../context/gallowsContext';
import { WordContext } from '../../context/wordContext';
import potence1 from '../../img/potence1.jpg';
import potence2 from '../../img/potence2.jpg';
import potence3 from '../../img/potence3.jpg';
import potence4 from '../../img/potence4.jpg';
import potence5 from '../../img/potence5.jpg';
import potence6 from '../../img/potence6.jpg';
import gagne from '../../img/gagne.jpg';

import './ProposedLetters.css';
import { MessagesContext } from '../../context/messagesContext';

const ProposedLetters = () => {
  const { word, underscoredWord, setUnderscoredWord } = useContext(WordContext);
  const { errorCounter, setErrorCounter, setImage } = useContext(GallowsContext);
  const { setIsWon, setIsLost } = useContext(MessagesContext);
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const disableAllLetterButton = () => {
    const letterButton = document.getElementsByClassName('letter-button');
    for (let i = 0; i < letterButton.length; i++) {
      letterButton[i].disabled = true;
    }
  }

  const disableOneLetterButton = (letter) => {
    const letterButton = document.getElementById(letter);
    letterButton.disabled = true;
  }

  const showReplayButton = () => {
    const replayButton = document.getElementById('replay-button');
    replayButton.style.display = 'block';
  }

  const endGame = (image) => {
    setImage(image);
    disableAllLetterButton();
    showReplayButton();
    if (image === potence6) setIsLost(true);
    if (image === gagne) setIsWon(true);
  }

  const checkLetter = letter => {
    if (word.indexOf(letter) === -1) {
      disableOneLetterButton(letter);

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
          endGame(potence6);
          break;
        default:
      }
      setErrorCounter(errorCounter + 1);
    } else {
      disableOneLetterButton(letter);

      let underW = [];
      for (let i = 0; i < word.length; i++) {
        if (underscoredWord[i] !== '_') underW.push(underscoredWord[i]);
        else {
          if (word[i] === letter) underW.push(letter);
          else underW.push('_');
        }

      }
      setUnderscoredWord(underW);

      if (underW.every(currentV => {
        return currentV !== '_';
      })) {
        endGame(gagne);
      }
    }
  }

  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <button className='letter-button' id={letter} key={index} onClick={() => checkLetter(letter)}>{letter}</button>
      })}
    </div>
  )
}

export default ProposedLetters;