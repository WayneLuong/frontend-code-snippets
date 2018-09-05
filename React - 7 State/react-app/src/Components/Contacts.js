import React, { Component } from 'react'
import Contact from './Contact';

/* Holds contacts in state */
class Contacts extends Component {
    constructor () {
        super();
        this.state = {
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
            ]
        }
    }

  render() {
          /* initialise the constructor */
      const {contacts} = this.state;
    /* Map through each contact object in the array maps to contact card component */
    /* Return each contacts to contact component for templating */
    return (
      <div>
        {contacts.map (contact => (
            <Contact
                key={contact.id}
                contact={contact}
            />
        ))}
      </div>
    )
  }
}
/*  name = {contact.name}
    email = {contact.email}
    phone = {contact.phone} */

export default Contacts;