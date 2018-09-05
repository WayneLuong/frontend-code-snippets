/* React Functional Component */
import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    const {branding} = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  )
}

/* Default value if no props is passed */
Header.defaultProps = {
    branding: 'Default Branding'
}
/* propTypes to validate data types */
Header.prototype = {
    branding: PropTypes.string.isRequired
}

export default Header;

/* ---------React Class Component */
/* import React, { Component } from 'react'

 class Header extends Component {
  render() {
      const {branding} = this.props;
    return (
      <div>
        <h1>{branding}</h1>
      </div>
    )
  }
}

export default Header; */


