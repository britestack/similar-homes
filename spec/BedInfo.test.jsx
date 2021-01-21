import React from 'react';

import BedInfo from '../client/src/components/BedInfo';

describe('<BedInfo />', () => {
  it('should render a BedIcon', () => {
    const wrapper = mount(<BedInfo beds={3} />);
    expect(wrapper.find('BedIcon')).toExist();
  });
  it('should have prop beds', () => {
    const wrapper = mount(<BedInfo beds={3} />);
    expect(wrapper.find('BedInfo')).toHaveProp('beds');
  });
});
