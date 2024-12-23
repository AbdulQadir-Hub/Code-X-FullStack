import React from "react";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container6">
        <div className="container6-1">
          <h4>Company</h4>
          <a href="">About Us</a>
          <br />
          <a href="">Contact Us</a>
        </div>
        <div className="container6-2">
          <h4>Products</h4>
          <a href="">Survey Solution</a>
          <br />
          <a href="">Workshop Automation System</a>
        </div>
        <div className="container6-3">
          <h4>Connect with us</h4>
          <i className="fa fa-3x fa-facebook-official" aria-hidden="true"></i>
          <i className="fa fa-3x fa-youtube-play" aria-hidden="true"></i>
          <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"></i>
        </div>
        <div className="container6-4">
          <h4>Services</h4>
          <a href="">Product Solution</a>
          <br />
          <a href="">Web Design</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
