import DisplayWord from "../displayWord/DisplayWord";
import EndMessage from "../endMessage/EndMessage";

import './Messages.css';

const Messages = () => {
  return <div className='messages'>
    <EndMessage />
    <DisplayWord />
  </div>
}

export default Messages;