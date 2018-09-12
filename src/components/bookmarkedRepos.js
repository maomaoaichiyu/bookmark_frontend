import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllBookmarked, del } from '../actions';
import deleteIcon from '../image/delete_icon.png';

class Bookmarked extends Component {
  componentDidMount() {
    const { getAllBookmarkedRepos } = this.props;
    getAllBookmarkedRepos();
  }

  deleteBookmark = (repo) => {
    const { deleteRepo } = this.props;
    deleteRepo(repo);
  }

  render() {
    const { bookmarkedResults } = this.props;
    return (
      <div className="BookmarkedSection">
        <h2>Bookmarked GitHub Repos:</h2>
        <div className="BookmarkedResults">
          {bookmarkedResults.map(repo => (
            <div className="repoBlock" key={repo.id}>
              <div className="repoContent">
                <div className="repoName">
                  Name:&nbsp;
                  {repo.name}
                </div>
                <div>
                  Id:&nbsp;
                  {repo.id}
                </div>
                <div>
                  Link:&nbsp;
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.url}</a>
                </div>
              </div>
              <div className="deleteButton">
                <input
                  type="image"
                  onClick={() => { this.deleteBookmark(repo); }}
                  src={deleteIcon}
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

Bookmarked.propTypes = {
  bookmarkedResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  getAllBookmarkedRepos: PropTypes.func.isRequired,
  deleteRepo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmarkedResults: state.reposReducer,
});

const mapDispatchToProps = dispatch => ({
  getAllBookmarkedRepos: () => dispatch(getAllBookmarked()),
  deleteRepo: repo => dispatch(del(repo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarked);
