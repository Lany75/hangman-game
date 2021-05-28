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

  it('should contain a div witch className is selected-word', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      underscoredWord: ['_', '_', '_', '_', '_']
    }));

    const selectedWord = shallow(<SelectedWord />);
    expect(selectedWord.find('.selected-word')).to.have.length(1);
  })

  it('should show the SelectedWord component with 5 letters', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      underscoredWord: ['_', '_', '_', '_', '_']
    }));

    const selectedWord = shallow(<SelectedWord />);

    const wordLetter = selectedWord.find('.word-letter');
    expect(wordLetter).to.have.length(5);
    wordLetter.map((wl) => {
      expect(wl.text()).to.equal('_')
    });
  });

  it('should show the SelectedWord component with 3 letters', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      underscoredWord: ['Z', 'Z', 'Z']
    }));

    const selectedWord = shallow(<SelectedWord />);

    const wordLetter = selectedWord.find('.word-letter');
    expect(wordLetter).to.have.length(3);
    wordLetter.map((wl) => {
      expect(wl.text()).to.equal('Z');
    });
  });
})