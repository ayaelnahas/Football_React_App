import React from 'react';
import { shallow } from 'enzyme';
import TeamCard from './TeamCard';

describe('<TeamCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<TeamCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
