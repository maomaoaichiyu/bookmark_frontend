import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { search } from '../actions';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {searchInput: ''};
  }

  searchButtonClick = (event) => {
    this.props.searchRepos(this.state.searchInput);
  }

  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }

  render() {
    return (
      <div className="SearchSection">
        <div className="SearchBox">
          <input type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder="Input a keyword..."/>
          <button onClick={this.searchButtonClick} disabled={!this.state.searchInput}>Search</button>
        </div>
        <div className="SearchResults">
          <ul>
            {this.props.searchResults.map(function(repo){
              return <li key={repo.id}>{repo.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  searchRepos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchResults: state.searchReducer
})

const mapDispatchToProps = dispatch => ({
  searchRepos: text => dispatch(search(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);