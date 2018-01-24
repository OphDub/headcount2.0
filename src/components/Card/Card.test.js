import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CARD', () => {

  test('it should match the snapshot', () => {
    const renderedComponent = shallow(<Card />);
    expect(renderedComponent).toMatchSnapshot();
  })
})