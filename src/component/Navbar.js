import React from "react";
import propTypes from "prop-types";
import "../App.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.cdmode} bg-${props.cdmode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
             <div className="mx-3"  onClick={props.changemode}>
             <label className="theme">
                <span>Light</span>
                <span className="theme__toggle-wrap">
                  <input
                   
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    // value="dark"
                  />
                  <span className="theme__fill"></span>
                  <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
                <span>Dark</span>
              </label>
             </div>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: propTypes.string,
};
Navbar.defaultProps = {
  title: "heading2 ",
};
