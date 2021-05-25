import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import SelectedWord from '../components/selectedWord/SelectedWord';

describe('<SelectedWord />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('should show the SelectedWord component', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      underscoredWord: ['_', '_', '_', '_', '_'] // correspond à "essai"
    }));

    const selectedWord = shallow(<SelectedWord />);
    expect(selectedWord.find('.selected-word')).to.have.length(1);

    const wordLetter = selectedWord.find('.word-letter');
    expect(wordLetter).to.have.length(5);
    wordLetter.map((wl) => {
      expect(wl.text()).to.equal('_')
    });
  });
})