import React from 'react';

import PriceInfo from '../client/src/components/PriceInfo';

describe('<PriceInfo />', () => {
  it('should have prop price', () => {
    const wrapper = mount(<PriceInfo price={11110} decreased={false} />);
    expect(wrapper.find('PriceInfo')).toHaveProp('price');
  });
  it('should have prop decreased', () => {
    const wrapper = mount(<PriceInfo price={11110} decreased={false} />);
    expect(wrapper.find('PriceInfo')).toHaveProp('decreased');
  });
});
