import React from 'react';
import './App.css';
import Search from './components/searchRepos';
import Bookmarked from './components/bookmarkedRepos';

const App = () => (
  <div className="App">
    <Search />
    <Bookmarked />
  </div>
);

export default App;
