import { createContext, useState } from "react";
import potence0 from '../img/potence0.jpg';

export const GallowsContext = createContext();

function GallowsProvider({ children }) {
  const [image, setImage] = useState(potence0);

  return (
    <GallowsContext.Provider value={{ image, setImage }}>
      {children}
    </GallowsContext.Provider>
  )
}

export default GallowsProvider;