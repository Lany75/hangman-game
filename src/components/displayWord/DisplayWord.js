import { useContext } from "react";
import { MessagesContext } from "../../context/messagesContext";
import { WordContext } from "../../context/wordContext";

import './DisplayWord.css';

const DisplayWord = () => {
  const { word } = useContext(WordContext);
  const { isLost } = useContext(MessagesContext);

  return isLost ? <div className='message'>Le mot était {word}</div> : <div className='message'></div>
}

export default DisplayWord;