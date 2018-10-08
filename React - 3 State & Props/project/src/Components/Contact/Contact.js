import React, { Component } from 'react'

class Contact extends Component {
  render() {
      /* Destructuring hte props */
      const {name, email, phone} = this.props
    return (
      <div>
        <h4>{name}</h4>
        <ul>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;