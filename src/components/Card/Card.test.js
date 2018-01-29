import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CARD', () => {
  let wrapper
  let mockId
  let mockLocation
  let mockData
  let mockFn

  beforeEach(() => {
    mockId = 'HOLLERADO'
    mockLocation = 'COLORADO'
    mockData = { 2004: 0.4, 2005: 0.5, 2006: 0.75, 2007: 0.8 }
    mockFn = jest.fn()
    wrapper = shallow (<Card  id={mockId}
                              location={mockLocation}
                              data={mockData}
                              selectCard={mockFn}/>)
  })

  it('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a location an an array of data points', () => {
    expect(wrapper.find('h4').text()).toEqual(mockLocation)
    expect(wrapper.find('ul').children().length).toEqual(4)
  })

  it('should have specific styling on list items depending on their value', () => {
    expect(wrapper.find('ul').children().first().hasClass('lowFive')).toEqual(true)
    expect(wrapper.find('ul').children().last().hasClass('highFive')).toEqual(true)
  })

  it('should call the selectCard method on click', () => {
    wrapper.simulate('click')

    expect(mockFn.mock.calls.length).toEqual(1)
    expect(mockFn.mock.calls).toEqual([[mockId]]);
  })
})