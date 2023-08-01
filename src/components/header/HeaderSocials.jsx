import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/collins-tochukwu-a279a4166/"
        target="blank"
      >
        <BsLinkedin className="linkedin" />
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/1UWBl96X-fONurOKUEYhEonX-V2mJ9ze1?ths=true"
        target="blank"
      >
        <FaGoogleDrive className="drive" />
      </a>
      <a
        tooltip={true}
        href="https://www.youtube.com/channel/UCIE-GqIRPQ4pVeTErJNGGZg"
        target="blank"
      >
        <FaYoutube className="youtube" />
      </a>
    </div>
  );
};

export default HeaderSocials;
