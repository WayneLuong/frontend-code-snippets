import React, { Component } from 'react';
import Header from './Components/Header';

/* Import boostrap and other libraries */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* App.css for main styling */

class App extends Component {
  render() {
    /* {{for css styling}} and camelCase */
    return (
      <div className="App">
        <Header />
        <h1 className="text-center" 
        style={{color: 'red', fontSize: '50px'}}>Style method 1</h1>
        <h1 style={headingStyle}>Style Method 2</h1>
      </div>
    );
  }
}

/* Styling in a variable */
const headingStyle = {
  color: 'green',
  fontFamily: 'Arial'
}

export default App;
