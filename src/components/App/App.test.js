import React from 'react';
import { shallow,mount } from 'enzyme';
import App from './App';

describe('APP', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('when a card is clicked it should be stored in state', () => {
    const renderedComponent = mount(<App />)
    const mockedCardArray = [
      {
        location: "COLORADO",
        data: {
          2004: 1,
          2005: 0.5,
          2006: 0.25
        }
      },
      {
        location: "ACADEMY",
        data: {
          2004: 0.75,
          2005: 0.25,
          2006: 1
        }
      }
    ]

    renderedComponent.setState({allDistricts: mockedCardArray})
    const firstDistrict = renderedComponent.find('article').first()
    const secondDistrict = renderedComponent.find('article').last()

    firstDistrict.simulate('click')
    secondDistrict.simulate('click')

    expect(renderedComponent.state().comparedDistricts).toEqual(mockedCardArray)

  })
})

