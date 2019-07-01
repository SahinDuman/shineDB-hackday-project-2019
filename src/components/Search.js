import React, { Component } from 'react';
import { debounce } from "lodash";
import SFlex from './Search-flex';
const apiKey = `${process.env.REACT_APP_API_KEY}`;

class Search extends Component {
  state = {
    data: null,
  }

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  };

  handleChange = (e) => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${e.target.value}&page=1`)
      .then(val => val.json())
      .then(data => this.setState({ data: data.results }));
  };
  componentWillUmount() {
    this.debouncedEvent.cancel();
  }

  render() {
    if (this.state.data) {
      return (
        <div className="search-grid">
          <input className="search-input" onChange={this.debounceEvent(this.handleChange, 500)} />
          <SFlex data={this.state.data} />

        </div>
      )
    }

    return (
      <div >
        <input className="search-input" placeholder="Search Movies" onChange={this.debounceEvent(this.handleChange, 500)} />
      </div>
    );
  }
}

export default Search;
