import React from 'react';
import { mount, shallow } from 'enzyme';

import Carousel from '../client/src/components/Carousel.jsx';

describe('<Carousel />', () => {
  it('should render a div', () => {
    const wrapper = mount(<Carousel />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('ul')).not.toExist();
  });
});
