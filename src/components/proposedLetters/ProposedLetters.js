import './ProposedLetters.css';
import Letter from '../letter/Letter';
import ALPHABET from '../../utils/alphabet';

const ProposedLetters = () => {
  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <Letter letter={letter} key={index} />
      })}
    </div>
  )
}

export default ProposedLetters;