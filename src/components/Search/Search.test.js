import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('SEARCH', () => {

  test('it should match the snapshot', () => {
    const renderedComponent = shallow(<Search />);
    expect(renderedComponent).toMatchSnapshot();
  })
})