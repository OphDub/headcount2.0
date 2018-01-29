import React from 'react';
import CompareContainer from './CompareContainer';
import Card from '../Card/Card';
import App from '../App/App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('COMPARE CONTAINER', () => {
  let wrapper;
  let mockSelectFunc;
  let comparedDistrictsArr;
  let comparisonObj;
  let renderedComponent;
  let masterDistrict;

  beforeEach(() => {
    renderedComponent = shallow(<App />);
    masterDistrict = new DistrictRepository(kinderData);
    mockSelectFunc = jest.fn();
    comparisonObj = {'CAMPO RE-6': 0.657, 'CANON CITY RE-1': 0.709, compared: 0.927};
    comparedDistrictsArr = [{ location: 'CAMPO RE-6',
      data: 
                        { '2004': 0,
                          '2005': 0,
                          '2006': 1,
                          '2007': 1,
                          '2008': 1,
                          '2009': 1,
                          '2010': 1,
                          '2011': 1,
                          '2012': 1,
                          '2013': 1,
                          '2014': 1 } },
    { location: 'CANON CITY RE-1',
      data:
                        { '2004': 0.302,
                          '2005': 0.353,
                          '2006': 0.119,
                          '2007': 0.218,
                          '2008': 0.766,
                          '2009': 0.98,
                          '2010': 0.993,
                          '2011': 0.993,
                          '2012': 1,
                          '2013': 1,
                          '2014': 1 } }];
    wrapper = shallow(<CompareContainer comparedDistricts={comparedDistrictsArr} selectCard={mockSelectFunc} comparisonObj={comparisonObj} />);
  });

  it('it should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the correct number of Cards', () => {
    expect(wrapper.find(Card).length).toEqual(2);
  });

  it('should render compare cards correctly', () => {
    const newComparisonObj = masterDistrict.compareDistrictAverages(comparedDistrictsArr[0].location, 
      comparedDistrictsArr[1].location);
    renderedComponent.setState({ newComparisonObj });
    
    expect(wrapper).toMatchSnapshot();
  });
});
