import React from 'react';
import CompareContainer from './CompareContainer';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('COMPARE CONTAINER', () => {
  let wrapper;
  let mockSelectFunc;
  let comparedDistrictsArr;
  let comparisonObj;

  beforeEach(() => {
    mockSelectFunc = jest.fn();
    comparisonObj = {'CAMPO RE-6': 0.657, 'CANON CITY RE-1': 0.709, compared: 0.927}
    comparedDistrictsArr = [ { location: 'CAMPO RE-6',
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
                          '2014': 1 } } ];
    wrapper = shallow(<CompareContainer comparedDistricts={comparedDistrictsArr} selectCard={mockSelectFunc} comparisonObj={comparisonObj} />);
  });

  it('it should exist', () => {
    expect(wrapper).toBeDefined()
  })

  // test.skip('it should match the snapshot', () => {
  //   const renderedComponent = shallow(<CompareContainer />);
  //   expect(renderedComponent).toMatchSnapshot();
  // })  
})

  

//   it('it should exist', () => {
//     expect(wrapper).toBeDefined()
//   })

//   it('should match snap of cardContainer', () => {
//     expect(wrapper).toMatchSnapshot();
//   })

//   it('should contain the correct number of Cards',() => {
//     const districtsArrLength = districtArr.length
//     expect(wrapper.find(Card).length).toEqual(districtsArrLength)
//   });

//   it('should return correct last district card component',() => {
//     let { location, data, id } = districtArr[3]
//      expect(wrapper.find(Card).get(3).props.location).toEqual("CENTER 26 JT")
//      expect(wrapper.find(Card).get(3).props.data).toEqual({"2004": 1, "2005": 1, "2006": 1, "2007": 1, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1})
//      expect(wrapper.find(Card).get(3).props.id).toEqual("CENTER 26 JT")
//   })
// });
