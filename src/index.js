import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDAknqqbl7mfZkgfBW7JTuNOxZdyWqvKt0';

// Create a new component. This component should produce some html.
// Function based component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated html and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));