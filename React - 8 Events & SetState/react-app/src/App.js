import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Events in React</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;
