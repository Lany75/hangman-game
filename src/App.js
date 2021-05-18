import './App.css';
import Goal from './components/goal/Goal';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import SelectedWord from './components/selectedWord/SelectedWord';

function App() {
  return (
    <div className="App">
      <Goal />
      <SelectedWord />
      <ProposedLetters />
    </div>
  );
}

export default App;
