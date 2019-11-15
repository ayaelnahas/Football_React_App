import React from 'react';
import { shallow } from 'enzyme';
import TeamCardDetailed from './TeamCardDetailed';

describe('<TeamCardDetailed />', () => {
  test('renders', () => {
    const wrapper = shallow(<TeamCardDetailed />);
    expect(wrapper).toMatchSnapshot();
  });
});
