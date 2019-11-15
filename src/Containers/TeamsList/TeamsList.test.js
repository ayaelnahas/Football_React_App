import React from 'react';
import { shallow } from 'enzyme';
import TeamsList from './TeamsList';

describe('<TeamsList />', () => {
  test('renders', () => {
    const wrapper = shallow(<TeamsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
