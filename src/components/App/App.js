import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: []
    }
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