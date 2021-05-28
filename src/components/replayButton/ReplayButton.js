import { useContext } from 'react';
import { GallowsContext } from '../../context/gallowsContext';
import { MessagesContext } from '../../context/messagesContext';
import { WordContext } from '../../context/wordContext';
import potence0 from '../../img/potence0.jpg';
import './ReplayButton.css';

const ReplayButton = (props) => {
  const { getRandomWord } = useContext(WordContext);
  const { setErrorCounter, setImage } = useContext(GallowsContext);
  const { setIsWon, setIsLost } = useContext(MessagesContext);

  const activeReplayButton = value => {
    props.activeReplayButton(value);
  }

  const disableLetters = value => {
    props.disableLetters(value);
  }

  const replay = () => {
    setImage(potence0);
    setErrorCounter(0);
    setIsLost(false);
    setIsWon(false);
    disableLetters(false);
    getRandomWord();
    activeReplayButton(false);
  }

  return (
    props.isActiveReplayButton ? <button id='replay-button' onClick={replay}>REJOUER</button> : <button id='replay-button' disabled>REJOUER</button>
  )
}

export default ReplayButton;