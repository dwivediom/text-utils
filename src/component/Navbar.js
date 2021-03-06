import React from "react";
import propTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

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
                <Link className="nav-link active" aria-current="page" to="/text-utils/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About us 
                </Link>
              </li>
             
            </ul>

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
