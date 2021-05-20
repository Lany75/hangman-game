import './App.css';
import Gallows from './components/gallows/Gallows';
import Goal from './components/goal/Goal';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import ReplayButton from './components/replayButton/ReplayButton';
import SelectedWord from './components/selectedWord/SelectedWord';
import GallowsProvider from './context/gallowsContext';
import WordProvider from './context/wordContext';

function App() {
  return (
    <WordProvider>
      <GallowsProvider>
        <div className="App">
          <Goal />
          <SelectedWord />
          <Gallows />
          <div className='letters-replay'>
            <ProposedLetters />
            <ReplayButton />
          </div>
        </div>
      </GallowsProvider>
    </WordProvider>
  );
}

export default App;
