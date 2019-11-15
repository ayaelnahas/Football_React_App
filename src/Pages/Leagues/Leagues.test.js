import React from 'react';
import { shallow } from 'enzyme';
import Leagues from './Leagues';

describe('<Leagues />', () => {
  test('renders', () => {
    const wrapper = shallow(<Leagues />);
    expect(wrapper).toMatchSnapshot();
  });
});
