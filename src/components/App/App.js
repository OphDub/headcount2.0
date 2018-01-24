import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
import { fdatasync } from 'fs';
const masterDistrict = new DistrictRepository (kinderData)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDistricts: []
    }
  }

  componentDidMount() {
    const kinderDistrict = masterDistrict.findAllMatches();
    this.setState({ allDistricts: kinderDistrict });
  }

  filterDistricts = (string) => {
    const upcaseString = string.toUpperCase();
    const foundDistricts = masterDistrict.findAllMatches(upcaseString);
    console.log(foundDistricts)
    // this.setState({ allDistricts: foundDistricts })

    // const foundDistricts = this.state.allDistricts.filter((district) => {
    //   if(district.location === upcaseString) {
    //     console.log(district)
    //   }
    // })
    // console.log(foundDistricts)
    // this.setState({ allDistricts: foundDistricts })

  }

  render() {
    // console.log(this.state.districts)
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
