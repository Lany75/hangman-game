import './ProposedLetters.css';

const ProposedLetters = () => {
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div className='proposed-letters'>
      {ALPHABET.map((letter, index) => {
        return <button className='letter-button' key={index}>{letter}</button>
      })}
    </div>
  )
}

export default ProposedLetters;