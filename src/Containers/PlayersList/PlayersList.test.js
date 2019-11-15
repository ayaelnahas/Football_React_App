import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList';

describe('<PlayersList />', () => {
  test('renders', () => {
    const wrapper = shallow(<PlayersList />);
    expect(wrapper).toMatchSnapshot();
  });
});
