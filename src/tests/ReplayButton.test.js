import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import ReplayButton from '../components/replayButton/ReplayButton';

describe('<ReplayButton/>', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  })

  it('should show the replayButton component when isActiveReplayButton is false', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      getRandomWord: jest.fn(),
      setErrorCounter: jest.fn(),
      setImage: jest.fn(),
      setIsWon: false,
      setIsLost: false,
      isActiveReplayButton: false,
      setIsActiveReplayButton: jest.fn(),
      setAreDisabledProposedLetters: jest.fn()
    }));

    const replayButton = shallow(<ReplayButton />);

    expect(replayButton.find('#replay-button')).to.have.length(1);
    expect(replayButton.props().disabled).to.equal(true);
    expect(replayButton.text()).to.equal('REJOUER');
  });

  it('should show the replayButton component when isActiveReplayButton is true', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      getRandomWord: jest.fn(),
      setErrorCounter: jest.fn(),
      setImage: jest.fn(),
      setIsWon: jest.fn(),
      setIsLost: jest.fn(),
      isActiveReplayButton: true,
      setIsActiveReplayButton: jest.fn(),
      setAreDisabledProposedLetters: jest.fn()
    }));

    const replayButton = shallow(<ReplayButton />);

    expect(replayButton.find('#replay-button')).to.have.length(1);
    expect(typeof (replayButton.props().onClick)).to.equal('function');
    expect(replayButton.text()).to.equal('REJOUER');
  });
});