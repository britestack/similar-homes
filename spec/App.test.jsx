import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../client/src/components/Carousel.jsx';

describe('<App />', () => {
  it('should render a near carousel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toExist();
  });
  // it('should not render a list', () => {
  //   const wrapper = shallow(<Carousel homes={[{}]} />);
  //   expect(wrapper.find('ul')).not.toExist();
  // });
});