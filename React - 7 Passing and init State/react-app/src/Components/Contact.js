import React, { Component } from 'react';
import propTypes from 'prop-types'

 class Contact extends Component {
  render() {
      /* Destructuring */
      const {name,email,phone} = this.props.contact
      /* displays each contacts object in a contact 'card' */
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

/* validation */
Contact.propTypes = {
    contact:propTypes.object.isRequired
}

export default Contact;