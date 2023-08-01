import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/collins/E-RESTAURANT 2.png";
import IMG2 from "../../assets/images/collins/contact.png";
import IMG3 from "../../assets/images/collins/gem-home.png";
import IMG4 from "../../assets/images/collins/firebase.png";
import IMG5 from "../../assets/images/collins/chat-app.png";
import IMG6 from "../../assets/images/collins/gem-form.png";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "E-Restaurant static website",
    github: "https://github.com/collintech",
    demo: "https://dribbble.com/Colleey",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Contact Page of Gemma webpage",
    github: "https://github.com/collintech",
    demo: "https://dribbble.com/Colleey",
  },
  {
    id: 3,
    Image: IMG3,
    title: "The billing page of Gemma website",
    github: "https://github.com/collintech",
    demo: "https://dribbble.com/Colleey",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Firebase crud operations demo",
    github: "https://github.com/collintech",
    demo: "https://fir-7c9c0.firebaseapp.com/",
  },
  {
    id: 5,
    Image: IMG5,
    title: "A React Chat App built with Firebase",
    github: "https://github.com/collintech",
    demo: "https://chatapp-ec0f1.firebaseapp.com/",
  },
  {
    id: 6,
    Image: IMG6,
    title: "The Login page of Gemma project",
    github: "https://github.com/collintech",
    demo: "https://dribbble.com/Colleey",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={Image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="blank" className="btn">
                  Gihub
                </a>
                <a href={demo} target="blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
