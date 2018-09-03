import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { search } from '../actions';
import PropTypes from 'prop-types';

class Search extends Component {

  render() {
    return (
      <div className="SearchSection">
        <div className="SearchBox">
          <input type="text" placeholder="Input a keyword..."/>
          <button onClick={() => this.props.search()}>Search</button>
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
  search: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchResults: state.searchReducer
})

const mapDispatchToProps = dispatch => ({
  search: text => dispatch(search(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);