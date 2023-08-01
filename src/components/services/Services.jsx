import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
import Price from "./Priceweb";
import Pricewrite from "./Pricewrite";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="services_list_icon" />
              <p>
                Transforming web designs into static and dynamic, functional web
                pages.
              </p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Front-End development, debugging and code refactoring</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Back-End development, debugging and refactoring</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Mobile App development</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Web development: one on one mentorship</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>I.T Consulting and coaching: guide on career path.</p>
            </li>
            <div>
              <Price />
            </div>
          </ul>
        </article>
        {/* Youtube */}
        <article className="service">
          <div className="service_head">
            <h3>YOU-TUBING</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="services_list_icon" />
              <p>A dedicated channel for posting tech related videos.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Web development tutorials, tricks and debugging tips.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Solution to P.C common software related problems.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>
                How to do it yourself lessons, navigating through tech career.
              </p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Updates on tech trends and innovations.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Reviews and listings on new tech products</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>Tips on finances: how to grow finances</p>
            </li>
          </ul>
        </article>
        {/* WRITING */}
        <article className="service">
          <div className="service_head">
            <h3>WRITING</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className="services_list_icon" />
              <p>I write to express deepest thoughts.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>I write articles for news outlets and blogs, research etc.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>
                I love poetry and have keen interest in writing fine pieces.
              </p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>I write biographies and stories on specific discourses.</p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>
                I can do a write up on different literatures, from lifestyle,
                business, tech and academics.
              </p>
            </li>
            <li>
              <BsCheck className="services_list_icon" />
              <p>editing and proofreading</p>
            </li>
            <div>
              <Pricewrite />
            </div>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
