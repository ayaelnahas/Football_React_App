import React from 'react';
import { shallow } from 'enzyme';
import LeagueCard from './LeagueCard';

describe('<LeagueCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<LeagueCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
