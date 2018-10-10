import React, { Component } from 'react';
import Client from './container/Client';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h3>Datos del Cliente</h3>
        </header>
        <Client />
      </div>
    );
  }
}

export default App;
