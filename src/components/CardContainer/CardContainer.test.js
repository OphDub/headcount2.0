import React from 'react';
import CardContainer from './CardContainer';
import Card from '../Card/Card';
import { shallow } from 'enzyme';

describe('CARD CONTAINER', () => {
  let wrapper;
  let mockSelectFunc;
  let comparedDistrictsObj;
  let districtArr;

  beforeEach(() => {
    mockSelectFunc = jest.fn();
    comparedDistrictsObj = [{"data": {"2004": 0.75, "2005": 0.25, "2006": 1}, "location": "ACADEMY"}];
    districtArr = [{ location: 'CAMPO RE-6',
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
       '2014': 1 } },
    { location: 'CENTENNIAL R-1',
      data:
     { '2004': 0,
       '2005': 0.105,
       '2006': 0.045,
       '2007': 0,
       '2008': 1,
       '2009': 1,
       '2010': 1,
       '2011': 1,
       '2012': 1,
       '2013': 1,
       '2014': 1 } },
    { location: 'CENTER 26 JT',
      data:
     { '2004': 1,
       '2005': 1,
       '2006': 1,
       '2007': 1,
       '2008': 1,
       '2009': 1,
       '2010': 1,
       '2011': 1,
       '2012': 1,
       '2013': 1,
       '2014': 1 } }];
    wrapper = shallow(<CardContainer districts={districtArr} selectCard={mockSelectFunc} comparedDistricts={comparedDistrictsObj}/>);
  });

  it('it should exist', () => {
    wrapper.debug();
    expect(wrapper).toBeDefined();
  });

  it('should match snap of cardContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the correct number of Cards', () => {
    const districtsArrLength = districtArr.length;
    expect(wrapper.find(Card).length).toEqual(districtsArrLength);
  });

  it('should return correct last district card component', () => {
    expect(wrapper.find(Card).get(3).props.location).toEqual("CENTER 26 JT");
    expect(wrapper.find(Card).get(3).props.data).toEqual(
      {"2004": 1, "2005": 1, "2006": 1, "2007": 1, "2008": 1, "2009": 1,
        "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1});
    expect(wrapper.find(Card).get(3).props.id).toEqual("CENTER 26 JT");
  });
});
