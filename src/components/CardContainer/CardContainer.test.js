import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CARD CONTAINER', () => {

  test.skip('it should match the snapshot', () => {
    const renderedComponent = shallow(<CardContainer />);
    expect(renderedComponent).toMatchSnapshot();
  })
})