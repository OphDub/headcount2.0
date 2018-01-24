import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtName: ''
    }
  }

  handleInput = (e) => {
    const { value } = e.target;
    
    this.setState({ districtName: value })
  }

  render() {
    return (
      <form action="">
        <input  type="text"
                placeholder="Search by District Name"
                onChange={this.handleInput}/>
      </form>
    )
  }
}

export default Search;
