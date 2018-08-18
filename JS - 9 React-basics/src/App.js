import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 

/* imported components */
import Module1 from './components/Module1';
import Project from './components/Project';
import './App.scss';

/* -------------Component-------------- */
class App extends Component {
    constructor() {
        /* super must be called first */
        super();
        this.state = {
            projects: [
           {
            id:'1',
            title:'name'
            },
             {
             id:'1',
             title:'name'
         },
          { 
                id:'1',
              title:'name'
       }
        ]
    }
    }
    render () {
        return <div className="App">{/* only one root div */}
            <h1>My App</h1>
            <Module1/>
            <Project projects={this.state.projects}/>{/* pass constructor to project component */}
        </div>;
    }
}

ReactDOM.render(
    /* element, */
    <App/>,
    document.getElementById('root')
);