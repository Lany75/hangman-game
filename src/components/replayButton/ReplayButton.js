import { useContext } from 'react';
import { GallowsContext } from '../../context/gallowsContext';
import { LettersContext } from '../../context/lettersContext';
import { MessagesContext } from '../../context/messagesContext';
import { ReplayContext } from '../../context/replayContext';
import { WordContext } from '../../context/wordContext';
import potence0 from '../../img/potence0.jpg';
import './ReplayButton.css';

const ReplayButton = () => {
  const { getRandomWord } = useContext(WordContext);
  const { setErrorCounter, setImage } = useContext(GallowsContext);
  const { setIsWon, setIsLost } = useContext(MessagesContext);
  const { isActiveReplayButton, setIsActiveReplayButton } = useContext(ReplayContext);
  const { setAreDisabledProposedLetters } = useContext(LettersContext);

  const replay = () => {
    setImage(potence0);
    setErrorCounter(0);
    setIsLost(false);
    setIsWon(false);
    setAreDisabledProposedLetters(false);
    getRandomWord();
    setIsActiveReplayButton(false);
  }

  return (
    isActiveReplayButton ? <button id='replay-button' onClick={replay}>REJOUER</button> : <button id='replay-button' disabled>REJOUER</button>
  )
}

export default ReplayButton;