import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    selectvalue: ""
  };

  onCountryChange = e => {
    const cv = e.target.value;
    console.log(cv);
    this.setState({
      selectvalue: cv
    });
    this.props.onCountryChange(cv);
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add
                </Link>
              </li>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                onChange={this.onCountryChange}
              >
                <option selected>Country</option>
                <option value="UA">UA</option>
                <option value="FR">FR</option>
                <option value="DE">DE</option>
                <option value="US">US</option>
              </select>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
