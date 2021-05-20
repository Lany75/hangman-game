import { createContext, useState } from "react";
import potence0 from '../img/potence0.jpg';

export const GallowsContext = createContext();

function GallowsProvider({ children }) {
  const [errorCounter, setErrorCounter] = useState(0);
  const [image, setImage] = useState(potence0);

  return (
    <GallowsContext.Provider value={{ errorCounter, setErrorCounter, image, setImage }}>
      {children}
    </GallowsContext.Provider>
  )
}

export default GallowsProvider;