import { createContext, useState } from "react";

export const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [nbFoundWord, setNbFoundWord] = useState(0);
  const [nbLostWord, setNbLostWord] = useState(0);

  return (
    <ScoreContext.Provider value={{ nbFoundWord, setNbFoundWord, nbLostWord, setNbLostWord }}>
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreProvider;