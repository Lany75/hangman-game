import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Letter from '../components/letter/Letter';
import ProposedLetters from '../components/proposedLetters/ProposedLetters';
import ALPHABET from '../utils/alphabet';

describe('<ProposedLetters />', () => {
  const proposedLetters = shallow(<ProposedLetters />);

  it('should contains a div witch className is proposed-letters', () => {
    expect(proposedLetters.find('.proposed-letters')).to.have.length(1);
  })

  it('should contains divs with Letter component', () => {
    ALPHABET.map((letter, index) => {
      expect(proposedLetters).to.contain(<Letter letter={letter} key={index} />);
    })
  })
})