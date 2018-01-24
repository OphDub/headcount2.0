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
      allDistricts: [],
      // helper = new DistrictRepository
    }
  }

  componentDidMount() {
    const kinderDist = new DistrictRepository(kinderData).findAllMatches();
    this.setState({ allDistricts: kinderDist });
  }

  filterDistricts(string) {
    //takes input from Search and filters through districts array
    const upcaseString = string.toUpperCase();
    const foundDistricts = new DistrictRepository(kinderData).findAllMatches(upcaseString)
    // const newStuff = this.state.allDistricts.findAllMatches(upcaseString)

    console.log(foundDistricts)
    // this.setState({ allDistricts: foundDistricts });
  }

  render() {
    console.log(this.state.districts)
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search filterDistricts={this.filterDistricts}/>
        <CompareContainer />
        <CardContainer districts={this.state.allDistricts}/>
      </div>
    );
  }
}

export default App;
