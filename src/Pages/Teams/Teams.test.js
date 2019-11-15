import React from 'react';
import { shallow } from 'enzyme';
import Teams from './Teams';

describe('<Teams />', () => {
  test('renders', () => {
    const wrapper = shallow(<Teams />);
    expect(wrapper).toMatchSnapshot();
  });
});
