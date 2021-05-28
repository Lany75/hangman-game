import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import EndMessage from '../components/endMessage/EndMessage';

describe('EndMessage />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('should show the EndMessage component with isWon and isLost are false', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      isWon: false,
      isLost: false
    }));

    const endMessage = shallow(<EndMessage />);
    expect(endMessage.find('.end-message')).to.have.length(1);
    expect(endMessage.text()).to.equal('');
  })

  it('should show the EndMessage component with isWon is true and isLost is false', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      isWon: true,
      isLost: false
    }));

    const endMessage = shallow(<EndMessage />);
    expect(endMessage.find('.end-message')).to.have.length(1);
    expect(endMessage.find('.won')).to.have.length(1);
    expect(endMessage.find('.end-message')).to.deep.equal(endMessage.find('.won'))
    expect(endMessage.text()).to.equal('Bravooo !!! Vous avez gagné !!');
  })

  it('should show the EndMessage component with isWon is false and isLost is true', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      isWon: false,
      isLost: true
    }));

    const endMessage = shallow(<EndMessage />);
    expect(endMessage.find('.end-message')).to.have.length(1);
    expect(endMessage.find('.lost')).to.have.length(1);
    expect(endMessage.find('.end-message')).to.deep.equal(endMessage.find('.lost'))
    expect(endMessage.text()).to.equal('Oh non !! Vous avez perdu ...');
  })
})