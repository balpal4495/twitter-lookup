import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import { Search } from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Search path='/' />
      </Router>
    </div>
  );
}

export default App;
