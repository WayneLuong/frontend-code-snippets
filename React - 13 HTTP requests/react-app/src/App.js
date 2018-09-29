import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Contacts from './Components/contacts/Contacts'
import AddContact from './Components/contacts/AddContact'
import EditContact from './Components/contacts/EditContact'

import Header from './Components/layout/Header'
import About from './Components/pages/About'
import NotFound from './Components/pages/NotFound'
import Test from './Components/test/Test'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'

class App extends Component {
  render() {
    return (
      /* Wrapped in provider to use state application wide */
      <Provider>
        <Router>
        <div className="App">
          <h1>Events in React</h1>
          <Header branding='Contact Manager'/>
          {/* Wrap in Router tag, Switch and route tag
            '/'= home '/about'= about
          */}
          <Switch>
            <Route exact path='/' component = {Contacts}/>
            <Route exact path='/contact/add' component = {AddContact}/>
            <Route exact path='/contact/edit/:id' component = {EditContact}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/test' component = {Test}/>
                          {/* Passing params in links */}
                          <Route exact path='/about/:id' component = {About}/>
          <Route component={NotFound}/>{/* Redirect default page 404 errors */}
          </Switch>
      
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
