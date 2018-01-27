import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('SEARCH', () => {
  let renderedComponent
  let mockFn

  beforeEach(() => {
    mockFn = jest.fn()
    renderedComponent = shallow(<Search filterDistricts={mockFn} />);
  })

  test('it should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  test('when handleInput is called it should update state', () => {
    const mockEvent = {target: {value: 'colorado' }}

    renderedComponent.instance().handleInput(mockEvent)
    renderedComponent.update()

    expect(renderedComponent.state().searchValue).toEqual(mockEvent.target.value)
  })

  test('when state is updated, it should also call the filterDistrcit function passed to Search', () => {
    const mockEvent = {target: {value: 'colorado' }}

    renderedComponent.instance().handleInput(mockEvent)
    renderedComponent.update()

    expect(mockFn.mock.calls).toEqual([[mockEvent.target.value]])
  })
})