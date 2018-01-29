import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CARD', () => {

  it('it should match the snapshot', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a location an an array of data points', () => {
    const mockLocation = 'COLORADO'
    const mockData = { 2004: 0.4, 2005: 0.5, 2006: 0.75, 2007: 0.8 }
    const wrapper = shallow (<Card location={mockLocation} data={mockData}/>)

    expect(wrapper.find('h4').text()).toEqual(mockLocation)
    expect(wrapper.find('ul').children().length).toEqual(4)
  })

  it('should have specific styling on list items depending on their value', () => {
    const mockLocation = 'COLORADO'
    const mockData = { 2004: 0.4, 2005: 0.5, 2006: 0.75, 2007: 0.8 }
    const wrapper = shallow (<Card location={mockLocation} data={mockData}/>)

  })

  it('should call the selectCard method on click', () => {

  })

})