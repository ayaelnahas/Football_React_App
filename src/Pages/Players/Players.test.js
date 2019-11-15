import React from 'react';
import { shallow } from 'enzyme';
import Players from './Players';

describe('<Players />', () => {
  test('renders', () => {
    const wrapper = shallow(<Players />);
    expect(wrapper).toMatchSnapshot();
  });
});
