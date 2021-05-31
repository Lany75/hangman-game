import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Letter from '../components/letter/Letter';

describe('<Letter />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('should contains a button witch className is letter-button', () => {
    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => ({
        word: 'essai',
        underscoredWord: ['_', '_', '_', '_', '_'], // correspond à 'essai'
        setUnderscoredWord: jest.fn(),
        errorCounter: 0,
        setErrorCounter: jest.fn(),
        setImage: jest.fn(),
        setIsWon: jest.fn(),
        setIsLost: jest.fn(),
        nbFoundWord: 0,
        setNbFoundWord: jest.fn(),
        nbLostWord: 0,
        setNbLostWord: jest.fn(),
        setIsActiveReplayButton: jest.fn(),
        areDisabledProposedLetters: false,
        setAreDisabledProposedLetters: jest.fn()
      }));

    const letter = shallow(<Letter letter={'A'} key={1} />);
    expect(letter.find('.letter-button')).to.have.length(1);
  })

  it('should contains a disabled button if isActive and areDisabledProposedLetters are false', () => {
    const setIsActive = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(isActive => [isActive = false, setIsActive])

    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => ({
        word: 'essai',
        underscoredWord: ['_', '_', '_', '_', '_'], // correspond à 'essai'
        setUnderscoredWord: jest.fn(),
        errorCounter: 0,
        setErrorCounter: jest.fn(),
        setImage: jest.fn(),
        setIsWon: jest.fn(),
        setIsLost: jest.fn(),
        nbFoundWord: 0,
        setNbFoundWord: jest.fn(),
        nbLostWord: 0,
        setNbLostWord: jest.fn(),
        setIsActiveReplayButton: jest.fn(),
        areDisabledProposedLetters: false,
        setAreDisabledProposedLetters: jest.fn()
      }));

    const letter = shallow(<Letter letter={'A'} key={1} />);
    expect(letter.props().disabled).to.equal(true);
  })

  it('should contains a disabled button if isActive is true and areDisabledProposedLetters is true', () => {
    const setIsActive = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(isActive => [isActive = true, setIsActive])

    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => ({
        word: 'essai',
        underscoredWord: ['_', '_', '_', '_', '_'], // correspond à 'essai'
        setUnderscoredWord: jest.fn(),
        errorCounter: 0,
        setErrorCounter: jest.fn(),
        setImage: jest.fn(),
        setIsWon: jest.fn(),
        setIsLost: jest.fn(),
        nbFoundWord: 0,
        setNbFoundWord: jest.fn(),
        nbLostWord: 0,
        setNbLostWord: jest.fn(),
        setIsActiveReplayButton: jest.fn(),
        areDisabledProposedLetters: true,
        setAreDisabledProposedLetters: jest.fn()
      }));

    const letter = shallow(<Letter letter={'A'} key={1} />);
    expect(letter.props().disabled).to.equal(true);
  })

  it('should contains an enabled button if isActive is true and areDisabledProposedLetters is false', () => {
    const setIsActive = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(isActive => [isActive = true, setIsActive])

    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => ({
        word: 'essai',
        underscoredWord: ['_', '_', '_', '_', '_'], // correspond à 'essai'
        setUnderscoredWord: jest.fn(),
        errorCounter: 0,
        setErrorCounter: jest.fn(),
        setImage: jest.fn(),
        setIsWon: jest.fn(),
        setIsLost: jest.fn(),
        nbFoundWord: 0,
        setNbFoundWord: jest.fn(),
        nbLostWord: 0,
        setNbLostWord: jest.fn(),
        setIsActiveReplayButton: jest.fn(),
        areDisabledProposedLetters: false,
        setAreDisabledProposedLetters: jest.fn()
      }));

    const letter = shallow(<Letter letter={'A'} key={1} />);
    expect(typeof (letter.props().onClick)).to.equal('function');
    expect(letter.text()).to.equal('A');
  })
})