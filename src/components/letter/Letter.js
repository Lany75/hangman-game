import { useContext, useEffect, useState } from "react";
import { GallowsContext } from "../../context/gallowsContext";
import { WordContext } from "../../context/wordContext";
import potence1 from '../../img/potence1.jpg';
import potence2 from '../../img/potence2.jpg';
import potence3 from '../../img/potence3.jpg';
import potence4 from '../../img/potence4.jpg';
import potence5 from '../../img/potence5.jpg';
import potence6 from '../../img/potence6.jpg';
import gagne from '../../img/gagne.jpg';
import { MessagesContext } from "../../context/messagesContext";
import { ScoreContext } from "../../context/scoreContext";
import { ReplayButtonContext } from '../../context/replayButtonContext';


const Letter = (props) => {
  const [isActive, setIsActive] = useState(true);
  const { word, underscoredWord, setUnderscoredWord } = useContext(WordContext);
  const { errorCounter, setErrorCounter, setImage } = useContext(GallowsContext);
  const { setIsWon, setIsLost } = useContext(MessagesContext);
  const { nbFoundWord, setNbFoundWord, nbLostWord, setNbLostWord } = useContext(ScoreContext);
  const { setIsActiveReplayButton } = useContext(ReplayButtonContext);

  const disableLetters = value => {
    props.disableLetters(value);
  }

  const endGame = (image) => {
    setImage(image);
    disableLetters(true);
    setIsActiveReplayButton(true);
    if (image === potence6) {
      setIsLost(true);
      setNbLostWord(nbLostWord + 1);
    }
    if (image === gagne) {
      setIsWon(true);
      setNbFoundWord(nbFoundWord + 1);
    }
  }

  const handleClick = (letter) => {
    setIsActive(false);

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
          endGame(potence6);
          break;
        default:
      }
      setErrorCounter(errorCounter + 1);
    } else {
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

  useEffect(() => {
    if (props.areDisabled) {
      setIsActive(true);
    }
  }, [props.areDisabled])


  return (
    props.areDisabled || !isActive ? (
      <button className='letter-button' id={props.letter} disabled>{props.letter}</button>
    ) : (
      <button className='letter-button' id={props.letter} onClick={() => handleClick(props.letter)}>{props.letter}</button>
    )
  )
}

export default Letter;