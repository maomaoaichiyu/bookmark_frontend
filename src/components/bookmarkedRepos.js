import React, { Component } from 'react';
import './components.css';

class Bookmarked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkedAll: []
    };
  }

  render() {
    return (
      <div className="bookmarkedSection">
        <h2>Bookmarked GitHub Repos:</h2>
        <div className="bookmarkedResults">
          <ul>
            {this.state.bookmarkedAll.map(function(repo){
              return <li>{repo}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Bookmarked;