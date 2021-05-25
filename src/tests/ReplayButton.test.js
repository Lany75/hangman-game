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

  it('should show the replayButton component', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      getRandomWord: jest.fn(),
      setErrorCounter: jest.fn(),
      setImage: jest.fn()
    }));

    const replayButton = shallow(<ReplayButton />);

    expect(replayButton.find('#replay-button')).to.have.length(1);
  });
});