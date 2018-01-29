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
      comparedDistricts: [],
      comparisonObj: {}
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
    const newFoundDistrictArray = [...this.state.comparedDistricts, foundDistrict]
    const stateLocations = this.state.comparedDistricts.map( district => district.location)

    if (!stateLocations.includes(foundDistrict.location) && newFoundDistrictArray.length <= 2 ) {
      this.setState({ comparedDistricts: newFoundDistrictArray })

      this.compareCardData(newFoundDistrictArray);
    } else {
      const newestCardData = newFoundDistrictArray[2]
      const newestCardDataUpdate = [newestCardData]
      
      this.setState({ comparedDistricts: newestCardDataUpdate,
                      comparisonObj: {} });
    }
  }

  compareCardData = (newFoundDistrictArray) => {
    if(newFoundDistrictArray.length === 2) {
      const comparisonObj = masterDistrict.compareDistrictAverages(newFoundDistrictArray[0].location, 
                                                                 newFoundDistrictArray[1].location);
      this.setState({ comparisonObj })
    }
  }

  render() {
    return (
      <div>
        <h1>HEADCOUNT 2.0</h1>
        <Search filterDistricts={this.filterDistricts} />
        <CompareContainer comparedDistricts={this.state.comparedDistricts}
                          selectCard={this.selectCard}
                          comparisonObj={this.state.comparisonObj} />
        <CardContainer  districts={this.state.allDistricts}
                        selectCard={this.selectCard}
                        comparedDistricts={this.state.comparedDistricts}/>
      </div>
    );
  }
}

export default App;
