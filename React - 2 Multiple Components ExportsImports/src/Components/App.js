import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from './Header/Header'; //import from Header class
import Footer from './Footer/Footer';

class App extends Component {

    render() {
        /* Return mulitple component in array useful for li */
        var list = [
            <Footer/>,
            <Footer/>,
        ];
        return (
        <div>
            <h1>Import exports components</h1>
            <Header/>
            {list}
        </div>
        )}
}

var root = document.getElementById('root')
ReactDOM.render(
    <App/>,
    root
)