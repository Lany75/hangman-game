import { createContext, useState } from "react";

export const ReplayContext = createContext();

function ReplayProvider({ children }) {
  const [isActiveReplayButton, setIsActiveReplayButton] = useState(false);

  return (
    <ReplayContext.Provider value={{ isActiveReplayButton, setIsActiveReplayButton }}>
      {children}
    </ReplayContext.Provider>
  )
}

export default ReplayProvider;