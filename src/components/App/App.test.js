import React from 'react';
import { shallow,mount } from 'enzyme';
import App from './App';
import Card from '../Card/Card';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('APP', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  });

  it('should start with an allDistricts array of 181 objects, an empty comparedDistrict array, and an empty object', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state().allDistricts.length).toEqual(181)
    expect(wrapper.state().comparedDistricts).toEqual([])
    expect(wrapper.state().comparisonObj).toEqual({})
  })

  it('should render the kinderData in headcount app', () => {
    const renderedComponent = shallow(<App />)
    const masterDistrict = new DistrictRepository (kinderData);
    const kinderDistrict = masterDistrict.findAllMatches();

    expect(renderedComponent.state().allDistricts.length).toEqual(181);
  })

  it('when cards are clicked they should be stored in state and rendered to the page', () => {
    const renderedComponent = mount(<App />)
    const mockedCardArray = [
      { location: "COLORADO", data: { 2004: 1, 2005: 0.5, 2006: 0.25}},
      { location: "ACADEMY", data: { 2004: 0.75, 2005: 0.25, 2006: 1 }}
    ]

    wrapper.setState({allDistricts: mockedCardArray})

    const firstDistrict = renderedComponent.find('article').first()
    const secondDistrict = renderedComponent.find('article').last()
    
    firstDistrict.simulate('click')
    secondDistrict.simulate('click')

    console.log(wrapper.state().debug())
    expect(wrapper.state().allDistricts).toEqual(mockedCardArray)
    expect(wrapper.state().comparedDistricts).toEqual(mockedCardArray)
    // expect(wrapper.find('section').first().children().length).toEqual(2)
  })

  it.skip('when two cards are compared it should create a comparison object in state', () => {
    const renderedComponent = mount(<App />)
    const mockedCardArray = [
      { location: "COLORADO", data: { 2004: 1, 2005: 0.5, 2006: 0.25}},
      { location: "ACADEMY", data: { 2004: 0.75, 2005: 0.25, 2006: 1 }}
    ]

    wrapper.setState({allDistricts: mockedCardArray})
    const firstDistrict = wrapper.find('article').first()
    const secondDistrict = wrapper.find('article').last()
    const mockCompObj = {
      "ACADEMY": 0.666,
      "COLORADO": 0.583,
      "compared": 0.875
    }

    firstDistrict.simulate('click')
    secondDistrict.simulate('click')

    expect(wrapper.state().comparisonObj).toEqual(mockCompObj)
  })
})

