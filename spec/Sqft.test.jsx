import React from 'react';

import SqftInfo from '../client/src/components/SqftInfo';

describe('<SqftInfo />', () => {
  it('should render a SqftIcon', () => {
    const wrapper = mount(<SqftInfo sqft={3} />);
    expect(wrapper.find('SqftIcon')).toExist();
  });
  it('should have prop sqft', () => {
    const wrapper = mount(<SqftInfo sqft={3} />);
    expect(wrapper.find('SqftInfo')).toHaveProp('sqft');
  });
});
