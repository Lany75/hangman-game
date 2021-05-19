import './App.css';
import Gallows from './components/gallows/Gallows';
import Goal from './components/goal/Goal';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import SelectedWord from './components/selectedWord/SelectedWord';
import WordProvider from './context/wordContext';

function App() {
  return (
    <WordProvider>
      <div className="App">
        <Goal />
        <SelectedWord />
        <Gallows />
        <ProposedLetters />
      </div>
    </WordProvider>
  );
}

export default App;
