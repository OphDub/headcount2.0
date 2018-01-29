/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('APP', () => {
  let wrapper;
  let mockDist1;
  let mockDist2;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockDist1 = {
      data: {2004: 0.24,
             2005: 0.278,
             2006: 0.337,
             2007: 0.395,
             2008: 0.536,
             2009: 0.598,
             2010: 0.64,
             2011: 0.672,
             2012: 0.695,
             2013: 0.703,
             2014: 0.741},
      location: "COLORADO"
    };
    mockDist2 = {
      data: {2004: 0.069,
             2005: 0.509,
             2006: 0.638,
             2007: 0.994,
             2008: 0.992,
             2009: 1,
             2010: 0.993,
             2011: 0.994,
             2012: 0.993,
             2013: 0.989,
             2014: 0.994},
      location: "COLORADO SPRINGS 11"
    };
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with an empty comparedDistrict array, and an empty comparison object', () => {
    expect(wrapper.state().comparedDistricts).toEqual([]);
    expect(wrapper.state().comparisonObj).toEqual({});
  });

  it('should have an allDistricts array full of kinderData', () => {
    const masterDistrict = new DistrictRepository(kinderData);
    const kinderDistrict = masterDistrict.findAllMatches();

    expect(wrapper.state().allDistricts.length).toEqual(181);
  });

  it('should be able to filter the allDistricts array if given a string', () => {
    const mockedCardArray = kinderData;
    const filteredArray = [mockDist1, mockDist2];

    wrapper.setState({allDistricts: mockedCardArray});
    wrapper.instance().filterDistricts('CoLoRaDo');

    expect(wrapper.state().allDistricts).toEqual(filteredArray);
  });

  it('should be able to select only two objects from the allDistricts array and store them in the comparedDistricts array in state', () => {
    const mockDist3 = { data: { 2004: 0.302,
                                2005: 0.267,
                                2006: 0.354,
                                2007: 0.392,
                                2008: 0.385,
                                2009: 0.39,
                                2010: 0.436,
                                2011: 0.489,
                                2012: 0.479,
                                2013: 0.488,
                                2014: 0.49},
                        location: "ACADEMY 20"
                      };

    wrapper.instance().selectCard('COLORADO');
    wrapper.instance().selectCard('COLORADO SPRINGS 11');

    expect(wrapper.state().comparedDistricts).toEqual([mockDist1, mockDist2]);

    wrapper.instance().selectCard('ACADEMY 20');

    expect(wrapper.state().comparedDistricts).toEqual([mockDist3]);
  });

  it('should be able to create a comparisonObject in state when two objects are in the comparedDistricts array', () => {
    const mockComparisonObj = { "COLORADO": 0.53, "COLORADO SPRINGS 11": 0.833, "compared": 0.636 };

    wrapper.instance().selectCard('COLORADO');
    wrapper.instance().selectCard('COLORADO SPRINGS 11');

    expect(wrapper.state().comparedDistricts).toEqual([mockDist1, mockDist2]);
    expect(wrapper.state().comparisonObj).toEqual(mockComparisonObj);
  });

  it('should render the objects in the allDistricts array to the page', () => {
    const renderedComponent = mount(<App />);

    expect(renderedComponent.find('article').length).toEqual(181);
  });


  it('when cards are clicked they should be stored in state and rendered to the page', () => {
    const wrapper = mount(<App />);
    const lastMockDist = {
      data: {2004:0,
             2005:1,
             2006:1,
             2007:1,
             2008:1,
             2009:1,
             2010:1,
             2011:1,
             2012:1,
             2013:1,
             2014:1},
      location: "YUMA SCHOOL DISTRICT 1"
    };
    const mockedCardArray = [mockDist1, lastMockDist];

    const firstDistrict = wrapper.find('article').first();
    const secondDistrict = wrapper.find('article').last();

    firstDistrict.simulate('click');
    secondDistrict.simulate('click');

    expect(wrapper.state().comparedDistricts).toEqual(mockedCardArray);
    expect(wrapper.find('article.selected').last().hasClass('selected')).toEqual(true);
    expect(wrapper.find('article.selected').length).toEqual(4);
  });

  it('when two cards are compared it should create a comparison object in state', () => {
    const wrapper = mount(<App />);
    const lastMockDist = {
      data: {2004:0,
             2005:1,
             2006:1,
             2007:1,
             2008:1,
             2009:1,
             2010:1,
             2011:1,
             2012:1,
             2013:1,
             2014:1},
      location: "YUMA SCHOOL DISTRICT 1"
    };
    const mockedCardArray = [mockDist1, lastMockDist];
    const mockCompObj = {
      "YUMA SCHOOL DISTRICT 1": 0.909,
      "COLORADO": 0.53,
      "compared": 0.583
    };

    const firstDistrict = wrapper.find('article').first();
    const secondDistrict = wrapper.find('article').last();

    firstDistrict.simulate('click');
    secondDistrict.simulate('click');

    expect(wrapper.find('article.selected').last().hasClass('selected')).toEqual(true);
    expect(wrapper.find('article.selected').length).toEqual(4);
    expect(wrapper.state().comparisonObj).toEqual(mockCompObj);
    expect(wrapper.find('.comparisonCard').length).toEqual(1);
  });
});

