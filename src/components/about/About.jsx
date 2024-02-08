import React from "react";
import ME from "../../assets/images/collins/me-removebg-preview.png";
import { ImUsers } from "react-icons/im";
import { BsAwardFill } from "react-icons/bs";
import { BsFolderFill } from "react-icons/bs";
import "./about.css";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className="about_card">
              <ImUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Counting</small>
            </article>
            <article className="about_card">
              <BsFolderFill className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p style={{ color: "white" }}>
            I am a full stack developer and a writer with keen interest in
            solving modern day business and lifestyle problems via technology.
            When I am not coding, I am writing to express my deepest thoughts
            and perception about life. <br />
            Over time, I have mastered my craft through learning, building and
            debugging. I am a Tech enthusiast who believes that a great journey
            is a process and that little pieces put together makes a mighty
            whole.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
