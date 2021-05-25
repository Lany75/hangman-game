import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Goal from '../components/goal/Goal';

describe('<Goal/>', () => {

  it("should contains a h1 tag with text 'Trouvez le mot avant d'avoir pendu Roger !!'", () => {
    const goal = shallow(<Goal />);
    const h1Tag = goal.find('h1')
    expect(h1Tag).to.have.length(1);
    expect(h1Tag.text()).to.be.equal("Trouvez le mot avant d'avoir pendu Roger !!");
  });
});