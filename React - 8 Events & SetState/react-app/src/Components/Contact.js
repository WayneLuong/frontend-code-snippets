import React, { Component } from 'react';
import propTypes from 'prop-types'

 class Contact extends Component {
   state={
     showContactInfo:false
   };

   /* ------------------State Function---------------- */
   /* Event function after onClick */
   /* .bind(this) custom methods or use () =>  */
  onShowClick = (e) =>{
    /* console.log(this.state); */
    /* console.log(e.target); */
    this.setState({showContactInfo: 
      !this.state.showContactInfo});
  }

     /* -----------------Props Function----------------- */
  onDeleteClick = ()=> {
    /* Calling the prop from Contacts.js */
    this.props.deleteClickHandler();
  };

  render() {
      /* Destructuring */
      const {name,email,phone} = this.props.contact
      const {showContactInfo} = this.state;
      /* displays each contacts object in a contact 'card' */
     /*passing params:  onClick={this.onShowClick.bind(this, name) */
      return (
      <div>
        <h4>{name} 
          <i onClick={this.onShowClick} style={{cursor:'pointer'}}>></i>
          <i onClick={this.onDeleteClick} style={{float:'right', color: 'red', cursor:'pointer'}}>X</i>
        </h4>
        {showContactInfo ? (
          <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
      </ul>
        ): null}
      </div>
    )
  }/* ? : similar to if(){} else{} */
}

/* validation */
Contact.propTypes = {
    contact:propTypes.object.isRequired
}

export default Contact;