import React from 'react';
import { shallow } from 'enzyme';
import LeagueCardDetailed from './LeagueCardDetailed';

describe('<LeagueCardDetailed />', () => {
  test('renders', () => {
    const wrapper = shallow(<LeagueCardDetailed />);
    expect(wrapper).toMatchSnapshot();
  });
});
