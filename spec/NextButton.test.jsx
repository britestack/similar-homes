import React from 'react';

import NextButton from '../client/src/components/NextButton';

describe('<NextButton />', () => {
  it('should render a BathIcon', () => {
    const wrapper = mount(<NextButton view={0} handleClick={() => {}} />);
    expect(wrapper.find('NextButton')).toHaveProp('handleClick');
  });
  it('should have prop baths', () => {
    const wrapper = mount(<NextButton view={0} handleClick={() => {}} />);
    expect(wrapper.find('NextButton')).toHaveProp('view');
  });
});
