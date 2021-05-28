import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import DisplayWord from '../components/displayWord/DisplayWord';
import EndMessage from '../components/endMessage/EndMessage';
import Messages from '../components/messages/Messages';

describe('<Messages />', () => {
  const messages = shallow(<Messages />);

  it('should contains a div witch className is messages', () => {
    expect(messages.find('.messages')).to.have.length(1);
  })

  it('should contains a EndMessage component', () => {
    expect(messages).to.contain(<EndMessage />);
  });

  it('should contains a DisplayWord component', () => {
    expect(messages).to.contain(<DisplayWord />);
  });
})