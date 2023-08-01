import React from "react";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

// import emailjs from "@emailjs/browser";

const Contact = () => {
  const formEndpoint =
    "https://getform.io/f/6d226bd9-e5be-4712-a9e0-206215b8bbb7";

  // const form = useRef();

  // <form ref={form} onSubmit={sendEmail}></form> EmailJS form attributes
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_fksc47r",
  //       "template_0orb4jj",
  //       form.current,
  //       "0Ej13cCsKBJXXa80K"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>collintoch30@yahoo.com</h5>
            <a href="mailto:collintoch30@gmail.com" target="blank">
              Send me an Email
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Snyloc Tech</h5>
            <a href="https://m.me/colley.tech" target="blank">
              Text Me
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+234-7069-426058</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2347069426058"
              target="blank"
            >
              Let's Chat
            </a>
          </article>
        </div>
        {/* {Form Section} */}
        <form action={formEndpoint} method="POST">
          <input type="text" name="subject" placeholder="SUBJECT" />
          <input type="text" name="name" placeholder="FULL NAME" required />
          <input
            type="text"
            name="email"
            placeholder="EMAIL ADDRESS"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message here!"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
