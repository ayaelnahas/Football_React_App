import React from 'react';
import { shallow } from 'enzyme';
import PlayerCard from './PlayerCard';

describe('<PlayerCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<PlayerCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
