import React, { Component } from 'react'
import Contact from './Contact';

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
    };

    /* passed function to Contact.js */
    deleteContact=(id)=>{
        console.log(id);
        const {contacts} = this.state; //init state

        //filter out the selected id
        const newContacts=contacts.filter((contact)=>
        contact.id !== id);

        this.setState({
            contacts:newContacts
        });
    }

  render() {

      const {contacts} = this.state;

    return (
      <React.Fragment>
        {contacts.map (contact => (
            <Contact
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this,
                    contact.id)}
            />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;