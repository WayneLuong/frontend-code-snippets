import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  /* ------------------State Function---------------- */

  onShowClick = e => {
    /* console.log(this.state); */
    /* console.log(e.target); */
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  /* -----------------Props Function-----------------
  takes in (id and dispatch) */
  onDeleteClick = (id, dispatch) => {
    //dispatch(state,action) e.g.
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
