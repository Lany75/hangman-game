import { createContext, useState } from "react";

export const LettersContext = createContext();

function LettersProvider({ children }) {
  const [areDisabledProposedLetters, setAreDisabledProposedLetters] = useState(false);

  return (
    <LettersContext.Provider value={{ areDisabledProposedLetters, setAreDisabledProposedLetters }}>
      {children}
    </LettersContext.Provider>
  )
}

export default LettersProvider;