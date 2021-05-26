import { useContext } from "react";
import { ScoreContext } from "../../context/scoreContext";

import './Score.css';

const Score = () => {
  const { nbFoundWord, nbLostWord } = useContext(ScoreContext);

  return (
    <table className='score'>
      <tbody>
        <tr>
          <td>Mots trouvés :</td>
          <td>{nbFoundWord}</td>
        </tr>
        <tr>
          <td>Mots non trouvés :</td>
          <td>{nbLostWord}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Score;