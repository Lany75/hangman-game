const ProposedLetters = () => {
  const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return ALPHABET.map((letter, index) => {
    return <button key={index}>{letter}</button>
  })
}

export default ProposedLetters;