import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/images/avatar1.jpg";
import AVTR2 from "../../assets/images/avatar2.jpg";
import AVTR3 from "../../assets/images/avatar3.jpg";
import AVTR4 from "../../assets/images/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVTR1,
    name: "Debby Crawford",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam dolore alias dolorum at enim delectus repellat vitae ducimus! Ad blanditiis eum animi rerum mollitia accusamus alias numquam, adipisci fugiat!",
  },
  {
    avatar: AVTR2,
    name: "David Blake",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam dolore alias dolorum at enim delectus repellat vitae ducimus! Ad blanditiis eum animi rerum mollitia accusamus alias numquam, adipisci fugiat!",
  },
  {
    avatar: AVTR3,
    name: "Peter Moss",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam dolore alias dolorum at enim delectus repellat vitae ducimus! Ad blanditiis eum animi rerum mollitia accusamus alias numquam, adipisci fugiat!",
  },
  {
    avatar: AVTR4,
    name: "Maria Shava",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam dolore alias dolorum at enim delectus repellat vitae ducimus! Ad blanditiis eum animi rerum mollitia accusamus alias numquam, adipisci fugiat!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
