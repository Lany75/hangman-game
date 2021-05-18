import './App.css';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import SelectedWord from './components/selectedWord/SelectedWord';

function App() {
  return (
    <div className="App">
      <SelectedWord />
      <ProposedLetters />
    </div>
  );
}

export default App;
