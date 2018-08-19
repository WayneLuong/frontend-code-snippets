import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from './Header/Header'; 
import Footer from './Footer/Footer';


class App extends Component {
    /* Constuctor */
    constructor(){
        super();
        this.state = {
            title: 'Welcome',
        };
    }
    changeTitle(title){
        this.setState({title});
    }

    render() {

        return (
        <div>
            <h1>Events and data changes</h1>
            {/* IMPORTANT: must bind this so it doesnt take in parameters from Header class from App instead
            Sends changeTitle method to Header.js*/}
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            <Footer/>
        </div>
        )}
}

var root = document.getElementById('root')
ReactDOM.render(
    <App/>,
    root
)