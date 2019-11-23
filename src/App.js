import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>My React App</h1></header>
        <div className="Main-content">
          <ColorBlock className="Inner-content" />
        </div>
        <footer>...</footer>
      </div>
    );
  }
}

export default App;