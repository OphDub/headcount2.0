import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: []
    }
  }

  componentDidMount() {
    const districts = new DistrictRepository(kinderData).findAllMatches();
    this.setState({ districts: districts });
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search />
        <CompareContainer />
        <CardContainer districts={this.state.districts}/>
      </div>
    );
  }
}

export default App;
