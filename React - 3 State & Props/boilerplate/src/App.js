import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Users from './Components/User/Users';
import Users2 from './Components/User/Users2';


import {Provider} from "./Context";


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
          <h1>App</h1>
          <Users />
          <Users2/>
        </div>
      </Provider>
    );
  }
}

export default App;
