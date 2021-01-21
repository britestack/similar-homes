import React from 'react';

import BathInfo from '../client/src/components/BathInfo';

describe('<BathInfo />', () => {
  it('should render a BathIcon', () => {
    const wrapper = mount(<BathInfo baths={3} />);
    expect(wrapper.find('BathIcon')).toExist();
  });
  it('should have prop baths', () => {
    const wrapper = mount(<BathInfo baths={3} />);
    expect(wrapper.find('BathInfo')).toHaveProp('baths');
  });
});
