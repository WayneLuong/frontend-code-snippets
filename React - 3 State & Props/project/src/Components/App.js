import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from './Header/Header'; 
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

/* State good for one time changes 
    Props (properties) can be passed through different components
*/

class App extends Component {
    /* States allows for quick changes on the virtual DOM without rendering the whole page (asynchronous)*/
    constructor(){
        super();
        this.state = {name : 'Wayne'};
    }

    render() {
        /* Changes the name after 1 sec */
        /* setTimeout(()=>{
            this.setState({name:'Bob'})
        }, 1000) */
        /* Props */
        const title= 'Injected props 1'
        return (
        <div>
            <h1>State and Props</h1>
            <p>State value: {this.state.name}. Each header has passed a different value</p>
            <Header title={title} branding="Branding" name={"passedprops"}/>
            <Header title={'Changed Title 2'} name={"passedprops"}/>
            
            <Contact 
            name="JohnDoe" 
            email="jdoe@gmail.com"
            phone="555-555-5555"/>
            
            <Footer/>
        </div>
        )}
}

var root = document.getElementById('root')
ReactDOM.render(
    <App/>,
    root
)