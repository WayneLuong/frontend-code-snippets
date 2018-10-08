import React, { Component } from 'react'
import {Consumer} from '../../Context'

export default class Users2 extends Component {
  render() {
    return (
      <div>
        {/* {FUNCTION BRACES}  */}
        <Consumer>
            {(value)=>(
              <div>
                <h2> User2 </h2>
                <p>{this.props.passProp}</p>
                </div>
            )}
        </Consumer>
      </div>
    )
  }
}
