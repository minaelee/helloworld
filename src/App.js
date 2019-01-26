import React, { Component } from 'react';
import Journal from './components/JournalComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            hello world
          </p>
          <Journal />
        </header>
      </div>
    );
  }
}

export default App;