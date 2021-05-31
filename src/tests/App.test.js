import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Goal from '../components/goal/Goal';
import Gallows from '../components/gallows/Gallows';
import ProposedLetters from '../components/proposedLetters/ProposedLetters';
import ReplayButton from '../components/replayButton/ReplayButton';
import Score from '../components/score/Score';
import SelectedWord from '../components/selectedWord/SelectedWord';
import Messages from '../components/messages/Messages';

describe('<App/>', () => {
  const app = shallow(<App />);

  it('should contains a div witch className is App', () => {
    expect(app.find('.App')).to.have.length(1);
  });

  it('should contains a Goal component', () => {
    expect(app).to.contain(<Goal />);
  });

  it('should contains a Score component', () => {
    expect(app).to.contain(<Score />);
  });

  it('should contains a SelectecWord component', () => {
    expect(app).to.contain(<SelectedWord />);
  });

  it('should contains a Messages component', () => {
    expect(app).to.contain(<Messages />);
  });

  it('should contains a Gallows component', () => {
    expect(app).to.contain(<Gallows />);
  });

  it('should contains a ProposedLetters component', () => {
    expect(app).to.contain(<ProposedLetters />);
  });

  it('should contains a ReplayButton component', () => {
    expect(app).to.contain(<ReplayButton />);
  });
})
