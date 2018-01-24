import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
    this.props.filterDistricts(this.state.searchValue)
  }

  render() {
    return (
      <form>
        <input  type="text"
                value={this.state.searchValue}
                placeholder="Search by District Name"
                onChange={this.handleInput}/>
      </form>
    )
  }
}

export default Search;
