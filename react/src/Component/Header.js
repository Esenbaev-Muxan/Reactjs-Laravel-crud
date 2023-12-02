import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navbarStyle = {
    backgroundColor: "#007BFF", // Change this to your desired background color
  };

  const navLinkStyle = {
    color: "white", // Change this to your desired text color
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container">
          <NavLink to="/" className="navbar-brand" style={navLinkStyle}>
            Navbar
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" style={navLinkStyle}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productlist" style={navLinkStyle}>
                  Product List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addproduct" style={navLinkStyle}>
                  Add Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
