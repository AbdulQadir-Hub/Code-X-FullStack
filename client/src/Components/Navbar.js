import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container1">
        <img
          className="logo"
          width="150px"
          src="https://5.imimg.com/data5/SELLER/Default/2023/10/354234082/BV/ON/BA/54603505/codex-survey-solution-500x500.png"
          alt="Codex Logo"
        />
        <div className="mail">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <a className="email" to="mailto:support@codex.in">
            support@codex.in
          </a>
        </div>
        <div className="phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span className="contact">0731-4088816, 93019-70501</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
                <Link
                  className="active nav-link"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/Clients">
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/Service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/Solutions">
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/SurveySolutions">
                  Survey Solution
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
