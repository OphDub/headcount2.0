import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('COMPARE CONTAINER', () => {

  test('it should match the snapshot', () => {
    const renderedComponent = shallow(<CompareContainer />);
    expect(renderedComponent).toMatchSnapshot();
  })
})