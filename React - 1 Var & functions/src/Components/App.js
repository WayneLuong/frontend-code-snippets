import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

class App extends Component {
    /* Functions */
    getVal(val){
        return 'Wayne' + val;
    }
    /* Constructors */
    constructor(){
        super()//must first line of constructor
        this.name = "Jen";
    }
    render() {
        /* Variables and functions */
        var name = 'Wayne';
        return (
        <div>
            <h1>Hello {name}!!</h1>
            <p>This is a function {this.getVal(3)} and this is a constructor {this.name}</p>
        </div>
        )}
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)