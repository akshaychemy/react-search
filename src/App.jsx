import React from 'react';
import './App.css';
import SearchComponent from './SearchComponent';

const App = () => {
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape'
  ];

  return (
    <div className="App">
      <h1>Search Example</h1>
      <SearchComponent data={data} />
    </div>
  );
};

export default App;
