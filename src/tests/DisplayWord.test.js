import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import DisplayWord from '../components/displayWord/DisplayWord';

describe('<DisplayWord />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('should show the DisplayWord component with isLost is false', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      word: 'essai',
      isLost: false
    }));

    const displayWord = shallow(<DisplayWord />);
    expect(displayWord.find('.message')).to.have.length(1);
    expect(displayWord.text()).to.equal('');
  })

  it('should show the DisplayWord component with isLost is true', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      word: 'essai',
      isLost: true
    }));

    const displayWord = shallow(<DisplayWord />);
    expect(displayWord.find('.message')).to.have.length(1);
    expect(displayWord.text()).to.equal('Le mot était essai');
  })
})