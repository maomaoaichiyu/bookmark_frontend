import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import { getAllBookmarked, del } from '../actions';
import PropTypes from 'prop-types';
import delete_icon from '../image/delete_icon.png';

class Bookmarked extends Component {

  deleteBookmark = (repo) => {
    this.props.deleteRepo(repo);
  }

  render() {
    this.props.getAllBookmakredRepos()
    return (
      <div className="BookmarkedSection">
        <h2>Bookmarked GitHub Repos:</h2>
        <div className="BookmarkedResults">
          {this.props.bookmarkedResults.map(function(repo) {
            return <div className="repoBlock" key={repo.id}>
                      <div className="repoContent">
                        <div className="repoName">Name: {repo.name}</div>
                        <div>Id: {repo.id}</div>
                        <div>Link: <a href={repo.url} target="_blank">{repo.url}</a></div>
                      </div>
                      <div className="deleteButton">
                        <img onClick={() => {this.deleteBookmark(repo)}} src={delete_icon} alt={`Bookmark ${repo.id}`}></img>
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
  getAllBookmakredRepos: PropTypes.func.isRequired,
  deleteRepo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  bookmarkedResults: state.reposReducer
})

const mapDispatchToProps = dispatch => ({
  getAllBookmakredRepos: () => dispatch(getAllBookmarked()),
  deleteRepo: repo => dispatch(del(repo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarked);