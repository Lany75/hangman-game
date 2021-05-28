import { createContext, useState } from "react";

export const ReplayButtonContext = createContext();

function ReplayButtonProvider({ children }) {
  const [isActiveReplayButton, setIsActiveReplayButton] = useState(false);

  return (
    <ReplayButtonContext.Provider value={{ isActiveReplayButton, setIsActiveReplayButton }}>
      {children}
    </ReplayButtonContext.Provider>
  )
}

export default ReplayButtonProvider;