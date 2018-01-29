import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';
const masterDistrict = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDistricts: [],
      comparedDistricts: [],
      comparisonObj: {}
    };
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
    const foundDist = this.state.allDistricts.find((district)=>
      district.location === id);
    const newFoundArray = [...this.state.comparedDistricts, foundDist];
    const stateLocations = this.state.comparedDistricts.map( district =>
      district.location);

    if (stateLocations.includes(foundDist.location)) {
      this.state.comparedDistricts.pop(foundDist.location);
      this.setState({ comparedDistricts: newFoundArray });
    } else if (!stateLocations.includes(foundDist.location) &&
      newFoundArray.length <= 2 ) {
      this.setState({ comparedDistricts: newFoundArray });

      this.compareCardData(newFoundArray);
    } else {
      const newestCardData = newFoundArray[2];
      const newestCardDataUpdate = [newestCardData];

      this.setState({ comparedDistricts: newestCardDataUpdate,
        comparisonObj: {} });
    }
  }

  compareCardData = (newFoundArray) => {
    if (newFoundArray.length === 2) {
      const comparisonObj = masterDistrict.compareDistrictAverages(
        newFoundArray[0].location,
        newFoundArray[1].location);
      this.setState({ comparisonObj });
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
