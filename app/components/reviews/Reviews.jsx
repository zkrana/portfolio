"use client";
import React from "react";
import Content from "../Content";
import Testimonial from "./Testimonial";
import reviewer1 from "../../../public/review-1.svg";
import reviewer2 from "../../../public/review-2.svg";
import reviewer3 from "../../../public/review-3.svg";

// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const testimonials = [
    {
      image: reviewer1,
      highlight: "Best Work",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "James Gouse",
      position: "CEO, BaseBox",
      rating: 5,
    },
    {
      image: reviewer2,
      highlight: "I will be back again",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "Jane Smith",
      position: "CEO, BaseBox",
      rating: 5,
    },
    {
      image: reviewer3,
      highlight: "Amazing man",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "John Doe",
      position: "CEO, BaseBox",
      rating: 4,
    },
    {
      image: reviewer3,
      highlight: "Amazing man",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "John Doe",
      position: "CEO, BaseBox",
      rating: 4,
    },
    {
      image: reviewer3,
      highlight: "Amazing man",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "John Doe",
      position: "CEO, BaseBox",
      rating: 4,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="reviews">
      <Content
        title="recommendations"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="testimonial-section max-w-6xl mx-auto mt-[50px]">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                className="testimonial-slide w-full"
                key={index}
                image={testimonial.image}
                highlight={testimonial.highlight}
                text={testimonial.text}
                author={testimonial.author}
                position={testimonial.position}
                rating={testimonial.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
