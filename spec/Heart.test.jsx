import React from 'react';

import Heart from '../client/src/components/Heart';

describe('<Heart />', () => {
  it('should have state: liked', () => {
    const wrapper = mount(<Heart />);
    expect(wrapper.find('Heart')).toHaveState('liked');
  });
});
