import React, { Component } from "react";
import { Consumer } from "../../Context";
import Users2 from "./Users2";

export default class Users extends Component {
  render() {
    return (
      <Consumer>
        {/* child of consumer is always a function {} 
            Access the whole state from value */}
        {value => {
          const { arrayField } = value;
          return (
            <div style={{border:'#000 solid'}}>
              <h2>Users This is {arrayField}</h2>
              <Users2 passProp="passed props from Users to User2" />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
