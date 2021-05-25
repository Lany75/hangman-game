import { createContext, useState } from "react";

export const MessagesContext = createContext();

function MessagesProvider({ children }) {
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);

  return (
    <MessagesContext.Provider value={{ isWon, setIsWon, isLost, setIsLost }}>
      {children}
    </MessagesContext.Provider>
  )
}

export default MessagesProvider;