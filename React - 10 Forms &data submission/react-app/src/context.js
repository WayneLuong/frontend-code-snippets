/* Context API to provide application level state */

import React, {Component} from 'react';

const Context = React.createContext();

/* Takes in a state and a action  */
//action is an object with a type
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state,
            /* filter out selected id */
            contacts:state.contacts.filter(contact=>
            contact.id !== action.payload) //payload is what youre sending e.g. id
        };
        case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [action.payload, 
                ...state.contacts]
        };
        default:
        return state;
    }
}

/* Export Provider and consumer */
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'jdoes@gmail.com',
                phone: '444-555-5555'
            },
            {
                id: 3,
                name: 'John Smith',
                email: 'smith@gmail.com',
                phone: '111-555-5555'
            }
        ],
        /* able to call this action (method) from other components */
        dispatch: action => {
            this.setState(state=>  reducer(state,action)) //set state to filtered out id
        }
    }

    /* Pass the entire state --Provider and consumer*/ 
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

/* Export Provider and consumer */

export const Consumer = Context.Consumer;

