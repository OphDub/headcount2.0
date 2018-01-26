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
      allDistricts: [],
      comparedDistricts: []
    }
  }

  componentDidMount() {
    const kinderDistrict = masterDistrict.findAllMatches();
    this.setState({ allDistricts: kinderDistrict });
  }

  filterDistricts = (string) => {
    const upcaseString = string.toUpperCase();
    const foundDistricts = masterDistrict.findAllMatches(upcaseString);

    this.setState({ allDistricts: foundDistricts });
  }

  selectCard = (id) => {
    const foundDistrict = this.state.allDistricts.find((district)=> district.location === id)
    const newFoundDistrictArray = [...this.state.comparedDistricts,foundDistrict]

    if (this.state.comparedDistricts.length < 2 && this.state.comparedDistricts !== newFoundDistrictArray) {
      this.setState({ comparedDistricts: newFoundDistrictArray })
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search filterDistricts={this.filterDistricts}/>
        <CompareContainer comparedDistricts={this.state.comparedDistricts}/>
        <CardContainer districts={this.state.allDistricts} selectCard={this.selectCard}/>
      </div>
    );
  }
}

export default App;
