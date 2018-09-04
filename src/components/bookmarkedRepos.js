import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { getAllBookmarked } from '../actions';
import PropTypes from 'prop-types';

class Bookmarked extends Component {

  render() {
    this.props.getAllBookmakredRepos()
    return (
      <div className="BookmarkedSection">
        <h2>Bookmarked GitHub Repos:</h2>
        <div className="BookmarkedResults">
          {this.props.bookmarkedResults.map(function(repo) {
            return <div className="repoBlock" key={repo.id}>
                      <div className="repoContent">
                        <div>{repo.name}</div>
                        <div>{repo.id}</div>
                        <div>{repo.url}</div>
                      </div>
                      <div className="deleteButton">
                      </div> 
                  </div>;
          }, this)}
        </div>
      </div>
    );
  }
}

Bookmarked.propTypes = {
  bookmarkedResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  getAllBookmakredRepos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  bookmarkedResults: state.reposReducer
})

const mapDispatchToProps = dispatch => ({
  getAllBookmakredRepos: () => dispatch(getAllBookmarked())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarked);