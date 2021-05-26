import { useState } from 'react';
import './App.css';
import Gallows from './components/gallows/Gallows';
import Goal from './components/goal/Goal';
import Messages from './components/messages/Messages';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import ReplayButton from './components/replayButton/ReplayButton';
import Score from './components/score/Score';
import SelectedWord from './components/selectedWord/SelectedWord';
import GallowsProvider from './context/gallowsContext';
import MessagesProvider from './context/messagesContext';
import ScoreProvider from './context/scoreContext';
import WordProvider from './context/wordContext';

function App() {
  const [isActiveReplayButton, setIsActiveReplayButton] = useState(false);

  const activeReplayButton = newValue => {
    setIsActiveReplayButton(newValue);
  }

  return (
    <WordProvider>
      <GallowsProvider>
        <MessagesProvider>
          <ScoreProvider>
            <div className="App">
              <Goal />
              <Score />
              <SelectedWord />
              <Messages />
              <Gallows />
              <ProposedLetters activeReplayButton={activeReplayButton} />
              <ReplayButton isActiveReplayButton={isActiveReplayButton} activeReplayButton={activeReplayButton} />
            </div>
          </ScoreProvider>
        </MessagesProvider>
      </GallowsProvider>
    </WordProvider>
  );
}

export default App;
