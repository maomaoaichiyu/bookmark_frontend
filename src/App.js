import React, { Component } from 'react';
import './App.css';
import Search from './components/searchRepos';
import Bookmarked from './components/bookmarkedRepos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <Bookmarked></Bookmarked>
      </div>
    );
  }
}

export default App;
