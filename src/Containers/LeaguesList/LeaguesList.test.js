import React from 'react';
import { shallow } from 'enzyme';
import LeaguesList from './LeaguesList';

describe('<LeaguesList />', () => {
  test('renders', () => {
    const wrapper = shallow(<LeaguesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
