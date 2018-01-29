import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('SEARCH', () => {
  let mockFn
  let mockEvent
  let wrapper

  beforeEach(() => {
    mockFn = jest.fn()
    mockEvent = {target: {value: 'colorado' }}
    wrapper = shallow(<Search filterDistricts={mockFn} />);
  })

  test('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('when handleInput is called it should update state', () => {
    wrapper.instance().handleInput(mockEvent)
    wrapper.update()

    expect(wrapper.state().searchValue).toEqual(mockEvent.target.value)
  })

  test('when state is updated, it should also call the filterDistrcit function passed to Search', () => {
    wrapper.instance().handleInput(mockEvent)
    wrapper.update()

    expect(mockFn.mock.calls).toEqual([[mockEvent.target.value]])
  })
})