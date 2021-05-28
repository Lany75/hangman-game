import './ProposedLetters.css';
import Letter from '../letter/Letter';

const ProposedLetters = () => {
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <Letter letter={letter} key={index} />
      })}
    </div>
  )
}

export default ProposedLetters;