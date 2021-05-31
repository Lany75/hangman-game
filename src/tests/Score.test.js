import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Score from '../components/score/Score';

describe('<Score />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    nbFoundWord: 0,
    nbLostWord: 0
  }));
  const score = shallow(<Score />);

  it('should contains a div witch className is score', () => {
    expect(score.find('.score')).to.have.length(1);
  })

  it('should contains a tbody tag', () => {
    expect(score.find('tbody')).to.have.length(1);
  })

  it('should contains 2 tr tags', () => {
    expect(score.find('tr')).to.have.length(2);
  })

  it('should contains 4 td tags', () => {
    expect(score.find('td')).to.have.length(4);
  })
})

