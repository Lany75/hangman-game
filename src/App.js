import './App.css';
import DisplayWord from './components/displayWord/DisplayWord';
import Gallows from './components/gallows/Gallows';
import Goal from './components/goal/Goal';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import ReplayButton from './components/replayButton/ReplayButton';
import SelectedWord from './components/selectedWord/SelectedWord';
import GallowsProvider from './context/gallowsContext';
import MessagesProvider from './context/messagesContext';
import WordProvider from './context/wordContext';

function App() {


  return (
    <WordProvider>
      <GallowsProvider>
        <MessagesProvider>
          <div className="App">
            <Goal />
            <div className='word-message'>
              <SelectedWord />
              <DisplayWord />
            </div>
            <Gallows />
            <div className='letters-replay'>
              <ProposedLetters />
              <ReplayButton />
            </div>
          </div>
        </MessagesProvider>
      </GallowsProvider>
    </WordProvider>
  );
}

export default App;
