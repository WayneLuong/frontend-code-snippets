import React from "react";
import {Link} from 'react-router-dom'
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              {/* to instead of href for Link */}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              {/* to instead of href for Link */}
                <Link to="/contact/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
              {/* to instead of href for Link */}
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
              {/* Passing params in links */}
                <Link to="/about" className="nav-link">
                  Params
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

export default Header;
