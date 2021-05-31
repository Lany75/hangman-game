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
import ReplayProvider from './context/replayContext';
import LettersProvider from './context/lettersContext';

function App() {
  return (
    <WordProvider>
      <GallowsProvider>
        <MessagesProvider>
          <ScoreProvider>
            <ReplayProvider>
              <LettersProvider>
                <div className="App">
                  <Goal />
                  <Score />
                  <SelectedWord />
                  <Messages />
                  <Gallows />
                  <ProposedLetters />
                  <ReplayButton />
                </div>
              </LettersProvider>
            </ReplayProvider>
          </ScoreProvider>
        </MessagesProvider>
      </GallowsProvider>
    </WordProvider>
  );
}

export default App;
