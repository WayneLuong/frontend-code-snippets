import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';
import {Link} from 'react-router-dom'

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {

    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  /*----------------- Asyn-------
  when have parameters async goes in params */
  onDeleteClick = async (id, dispatch) => {
    //dont need const res = if not getting any data back
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) //tempalte string`` to bring in id

    dispatch({type: 'DELETE_CONTACT',payload:id} );
  };
 
  render() {
    /* Destructuring */
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div>
              <h4>
                {name}
                <i onClick={this.onShowClick} style={{ cursor: "pointer" }}>
                  >
                </i>
                <i
                  onClick={this.onDeleteClick.bind(
                    //bind.this takes in id and dispatch 
                    this, id, dispatch
                  )}
                  style={{ float: "right", color: "red", cursor: "pointer" }}
                >
                  X
                </i>
                <Link 
                to={`contact/edit/${id}`}
                style={{
                  color: 'blue',
                  cursor:'pointer',
                  marginRight:'1rem',
                  float:'right'}}>
                EDIT
                </Link>
              </h4>
              {showContactInfo ? (
                <ul>
                  <li>Email: {email}</li>
                  <li>Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

/* validation */
Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
