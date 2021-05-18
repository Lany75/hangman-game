import './App.css';
import Gallows from './components/gallows/Gallows';
import Goal from './components/goal/Goal';
import ProposedLetters from './components/proposedLetters/ProposedLetters';
import SelectedWord from './components/selectedWord/SelectedWord';

function App() {
  return (
    <div className="App">
      <Goal />
      <SelectedWord />
      <Gallows />
      <ProposedLetters />
    </div>
  );
}

export default App;
