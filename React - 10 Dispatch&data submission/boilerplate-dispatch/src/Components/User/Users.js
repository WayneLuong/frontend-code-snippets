import React, { Component } from "react";
import { Consumer } from "../../Context";
import Users2 from "./Users2";

export default class Users extends Component {

    onSubmit(dispatch, e){
        e.preventDefault();

        const newUser = {
            //empty
        }

        dispatch({ type:'EXAMPLE', payload: newUser})
    }

    onChange= e =>{
        console.log({ [e.target.name]: e.target.value });
    }

  render() {
    return (
      <Consumer>
        {/* child of consumer is always a function {} 
            Access the whole state from value */}
        {value => {
          const { arrayField, dispatch } = value;//Bring in dispatch to use
          return (
            <div style={{border:'#000 solid'}}>
              <h2>Users This is {arrayField}</h2>
              <Users2 passProp="passed props from Users to User2" />

              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <label>Name</label>
                  <input name='name' onChange={this.onChange}type='text' placeholder='Name..'/>
                  <button type='submit'>Submit</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
