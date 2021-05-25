import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Gallows from '../components/gallows/Gallows';

describe('<Gallows />', () => {
  let realUseContext;
  beforeEach(() => {
    realUseContext = React.useContext;
  });

  afterEach(() => {
    React.useContext = realUseContext;
  })

  it('should show the Gallows component', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      image: 'image-link'
    }));

    const gallows = shallow(<Gallows />);

    expect(gallows.find('#gallows')).to.have.length(1);
    expect(gallows.props().src).to.equal('image-link');
    expect(gallows.props().alt).to.equal('la potence');
  });
})