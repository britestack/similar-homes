import React from 'react';

import PrevButton from '../client/src/components/PrevButton';

describe('<PrevButton />', () => {
  it('should render a BathIcon', () => {
    const wrapper = mount(<PrevButton view={0} handleClick={() => {}} />);
    expect(wrapper.find('PrevButton')).toHaveProp('handleClick');
  });
  it('should have prop baths', () => {
    const wrapper = mount(<PrevButton view={0} handleClick={() => {}} />);
    expect(wrapper.find('PrevButton')).toHaveProp('view');
  });
});