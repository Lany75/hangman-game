import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import ProposedLetters from '../components/proposedLetters/ProposedLetters';

describe('<ProposedLetters />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  })

  it('should show the ProposedLetters component', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      word: 'essai',
      underscoredWord: ['_', '_', '_', '_', '_'], // correspond à "essai"
      setUnderscoredWord: jest.fn(),
      errorCounter: 0,
      setErrorCounter: jest.fn(),
      setImage: jest.fn(),
    }));
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const proposedLetters = shallow(<ProposedLetters />);
    expect(proposedLetters.find('.proposed-letters')).to.have.length(1);

    const letterButtons = proposedLetters.find('.letter-button');
    expect(letterButtons).to.have.length(ALPHABET.length);
    letterButtons.map((lb, index) => {
      expect(lb.props().id).to.equal(ALPHABET[index]);
      expect(lb.text()).to.equal(ALPHABET[index]);
    })
  })
})