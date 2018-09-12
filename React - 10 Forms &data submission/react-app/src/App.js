import React, { Component } from 'react';
import './App.css';
import Header from './Components/layout/Header'
import Contacts from './Components/contacts/Contacts'
import AddContact from './Components/contacts/AddContact'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'

class App extends Component {
  render() {
    return (
      /* Wrapped in provider to use state application wide */
      <Provider>
        <div className="App">
          <h1>Events in React</h1>
          <Header branding='Contact Manager'/>
          <AddContact/>
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
