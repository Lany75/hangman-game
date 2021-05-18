import potence from '../../img/potence.jpg';
import tete from '../../img/tete.jpg';
import corps from '../../img/corps.jpg';
import brasDroit from '../../img/brasDroit.jpg';
import brasGauche from '../../img/brasGauche.jpg';
import jambeDroite from '../../img/jambeDroite.jpg';
import jambeGauche from '../../img/jambeGauche.jpg';
import './Gallows.css';

const gallows = () => {
  return <div className='gallows'>
    <img src={potence} alt='la potence' />
    <img src={tete} alt='la tête de Roger' />
    <img src={corps} alt='le corps de Roger' />
    <img src={brasDroit} alt='le bras droit de Roger' />
    <img src={brasGauche} alt='le bras gauche de Roger' />
    <img src={jambeDroite} alt='la jambe droite de Roger' />
    <img src={jambeGauche} alt='la jambe gauche de Roger' />
  </div>
}

export default gallows