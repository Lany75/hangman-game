import { useContext } from 'react';
import { GallowsContext } from '../../context/gallowsContext';
import { MessagesContext } from '../../context/messagesContext';
import { WordContext } from '../../context/wordContext';
import potence0 from '../../img/potence0.jpg';
import './ReplayButton.css';

const ReplayButton = () => {
  const { getRandomWord } = useContext(WordContext);
  const { setErrorCounter, setImage } = useContext(GallowsContext);
  const { setIsLost } = useContext(MessagesContext);

  const replay = () => {
    setImage(potence0);
    setErrorCounter(0);
    setIsLost(false);

    const buttonLetter = document.getElementsByClassName('letter-button');
    for (let i = 0; i < buttonLetter.length; i++) {
      buttonLetter[i].disabled = false;
    }

    getRandomWord();

    const buttonReplay = document.getElementById('replay-button');
    buttonReplay.style.display = 'none';
  }

  return <button id='replay-button' onClick={replay}>REJOUER</button>
}

export default ReplayButton;