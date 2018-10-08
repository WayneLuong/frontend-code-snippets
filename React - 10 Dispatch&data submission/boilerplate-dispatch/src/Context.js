import React, {Component} from 'react'

//New Context
const Context = React.createContext();

const reducer = (state, action)=> {
    switch(action.type){
        case 'EXAMPLE':
        return (
            console.log('Action success')
        );
        case 'EXAMPLE2':
        return{

        };
        default:
        return state;
    }
}

//Provider Component
export class Provider extends Component {
    //whole state
    state ={
        arrayField:['from','state','context'],
        dispatch: action => {
            this.setState(state=>  reducer(state,action)) //set state to filtered out id
        }
    } 
    //Return context provider
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
