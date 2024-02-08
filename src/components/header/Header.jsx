import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/images/collins/IMG_20201115_115430.jpg";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";

const header = () => {
  return (
    <div className="container header_container">
      <h1 className="name">Tochukwu Collins</h1>
      <h5 className="headline">Fullstack Developer</h5>
      <TypeAnimation
        sequence={["WRITER", 2000, "YOUTUBER", 2000, "TECH ENTHUSIAST", 2000]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
        className="animation"
      />
      <CTA />

      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#footer" className="scroll_down">
        Scroll down
      </a>
    </div>
  );
};

export default header;
