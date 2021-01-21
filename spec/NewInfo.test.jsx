import React from 'react';

import NewInfo from '../client/src/components/NewInfo';

describe('<NewInfo />', () => {
  it('should render a span', () => {
    const wrapper = mount(<NewInfo isNew={true} />);
    expect(wrapper.find('span')).toExist();
  });
  it('should have prop isNew', () => {
    const wrapper = mount(<NewInfo isNew={true} />);
    expect(wrapper.find('NewInfo')).toHaveProp('isNew');
  });
});
