import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { search, add } from '../actions';
import bookmarkIcon from '../image/bookmark_icon.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '' };
  }

  searchButtonClick = () => {
    const { searchRepos } = this.props;
    const { searchInput } = this.state;
    searchRepos(searchInput);
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  addBookmark = (repo) => {
    const { addRepo } = this.props;
    addRepo(repo);
  }

  render() {
    const { searchResults } = this.props;
    const { searchInput } = this.state;
    return (
      <div className="SearchSection">
        <div className="SearchBox">
          <input
            type="text"
            value={searchInput}
            onChange={this.handleChange}
            placeholder="Input a keyword..."
          />
          <button
            type="button"
            onClick={this.searchButtonClick}
            disabled={!searchInput}
          >
            Search
          </button>
        </div>
        <div className="SearchResults">
          {searchResults.map(repo => (
            <div className="repoBlock" key={repo.id}>
              <div className="repoContent">
                <div className="repoName">
                  Name:
                  {repo.name}
                </div>
                <div>
                  Id:
                  {repo.id}
                </div>
                <div>
                  Link:
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.url}</a>
                </div>
              </div>
              <div className="addButton">
                <input
                  type="image"
                  onClick={() => { this.addBookmark(repo); }}
                  src={bookmarkIcon}
                  alt={`Bookmark ${repo.id}`}
                />
              </div>
            </div>
          ), this)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  searchRepos: PropTypes.func.isRequired,
  addRepo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.searchReducer,
});

const mapDispatchToProps = dispatch => ({
  searchRepos: text => dispatch(search(text)),
  addRepo: repo => dispatch(add(repo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
