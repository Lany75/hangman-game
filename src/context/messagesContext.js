import { createContext, useState } from "react";

export const MessagesContext = createContext();

function MessagesProvider({ children }) {
  const [isLost, setIsLost] = useState(false);

  return (
    <MessagesContext.Provider value={{ isLost, setIsLost }}>
      {children}
    </MessagesContext.Provider>
  )
}

export default MessagesProvider;