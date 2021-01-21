import React from 'react';
import { mount, shallow } from 'enzyme';

import Carousel from '../client/src/components/Carousel';

describe('<Carousel />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Carousel homes={[{}]} />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<Carousel homes={[{}]} />);
    expect(wrapper.find('ul')).not.toExist();
  });
});
