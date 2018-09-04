import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { search, add } from '../actions';
import PropTypes from 'prop-types';
import bookmark_icon from '../image/bookmark_icon.png';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {searchInput: ''};
  }

  searchButtonClick = () => {
    this.props.searchRepos(this.state.searchInput);
  }

  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }

  addBookmark = (repo) => {
    this.props.addRepo(repo);
  }

  render() {
    return (
      <div className="SearchSection">
        <div className="SearchBox">
          <input type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder="Input a keyword..."/>
          <button onClick={this.searchButtonClick} disabled={!this.state.searchInput}>Search</button>
        </div>
        <div className="SearchResults">
          {this.props.searchResults.map(function(repo) {
            return <div className="repoBlock" key={repo.id}>
                      <div className="repoContent">
                        <div>{repo.name}</div>
                        <div>{repo.id}</div>
                        <div><a href={repo.url}>{repo.url}</a></div>
                      </div>
                      <div className="addButton">
                        <img onClick={() => {this.addBookmark(repo)}} src={bookmark_icon} alt={`Bookmark ${repo.id}`}></img>
                      </div> 
                  </div>;
          }, this)}
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
  searchRepos: PropTypes.func.isRequired,
  addRepo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchResults: state.searchReducer
})

const mapDispatchToProps = dispatch => ({
  searchRepos: text => dispatch(search(text)),
  addRepo: repo => dispatch(add(repo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);