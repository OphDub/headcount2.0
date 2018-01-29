import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
    this.props.filterDistricts(this.state.searchValue);
  }

  render() {
    return (
      <form className="search">
        <input  type="text"
          placeholder="Search by District Name"
          onChange={this.handleInput}/>
      </form>
    );
  }
}

Search.propTypes = {
  filterDistricts: PropTypes.func.isRequired
};

export default Search;
