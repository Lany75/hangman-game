import { useContext } from "react";
import { MessagesContext } from "../../context/messagesContext";

import './EndMessage.css';

const EndMessage = () => {
  const { isWon, isLost } = useContext(MessagesContext);

  return (
    <>
      {!isWon && !isLost ? <div className='end-message'></div> : (
        isWon ? <div className='end-message won'>Bravooo !!! Vous avez gagné !!</div> : (
          isLost && <div className='end-message lost'>Oh non !! Vous avez perdu ...</div>
        )
      )}
    </>
  )
}

export default EndMessage;