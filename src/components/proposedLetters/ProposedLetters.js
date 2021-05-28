import './ProposedLetters.css';
import Letter from '../letter/Letter';

const ProposedLetters = (props) => {
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const disableLetters = newValue => {
    props.disableLetters(newValue);
  }

  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <Letter letter={letter} key={index} areDisabled={props.areDisabled} disableLetters={disableLetters} />
      })}
    </div>
  )
}

export default ProposedLetters;