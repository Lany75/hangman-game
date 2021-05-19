import { useContext } from 'react';
import { GallowsContext } from '../../context/gallowsContext';

import './Gallows.css';

const Gallows = () => {
  const { image } = useContext(GallowsContext);

  return <img id='gallows' src={image} alt='la potence' />
}

export default Gallows;