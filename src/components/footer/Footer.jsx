import React from "react";
import "./footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        COLLEY
      </a>

      <ul className="permlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/collintech" target="blank">
          <BsFacebook />
        </a>
        <a href="https://instagram.com/coltec057" target="blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/coltec057" target="blank">
          <BsTwitter />
        </a>
        <a
          href="https://app.slack.com/client/TCYEB44S2/D03BYFBV0Q0"
          target="blank"
        >
          <BsSlack />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; COLLEY. All rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
