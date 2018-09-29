/* Context API to provide application level state */

import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state, 
            contacts:state.contacts.filter(contact=>
            contact.id !== action.payload) //payload is what youre sending e.g. id
        };
        case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [action.payload, 
                ...state.contacts]
        };
        case 'UPDATE_CONTACT':
        return {
            ...state,
            //  this === this ? IF : ELSE
            //id comes from payload.id response 
            contacts:state.contacts.map(contact =>
                contact.id === action.payload.id ? (contact = 
                    action.payload ):contact) 
        }
        default:
        return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            //array of contacts
        ],
        dispatch: action => {
            this.setState(state=>  reducer(state,action)) //set state to filtered out id
        }
    }

    /* ------------GET------------------ */
    //mainly used for http request
  /*   componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({contacts:
            res.data})); //.data access the http data
    } */

    /* -----------Async await (better syntax)------------- 
    await waits for operation to finish in asynchronous operation*/
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        
        this.setState({contacts:res.data})
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

