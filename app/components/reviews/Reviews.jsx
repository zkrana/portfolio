"use client";
import React from "react";
import Content from "../Content";
import Testimonial from "./Testimonial";

// import Swiper core and required modules
import { Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const testimonials = [
    {
      image: "/review-1.svg", // URL of the first image
      highlight: "Best Work",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "James Gouse",
      position: "CEO, BaseBox",
      rating: 5,
    },
    {
      image: "/review-2.svg", // URL of the second image
      highlight: "I will be back again",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "Jane Smith",
      position: "CEO, BaseBox",
      rating: 5,
    },
    {
      image: "/review-3.svg", // URL of the third image
      highlight: "Amazing man",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "John Doe",
      position: "CEO, BaseBox",
      rating: 4,
    },
    {
      image: "/review-1.svg", // URL of the third image
      highlight: "Amazing man",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      author: "John Doe",
      position: "CEO, BaseBox",
      rating: 4,
    },
  ];

  return (
    <div className="reviews">
      <Content
        title="recommendations"
        description="Your success is our priority, and our recommendations showcase the quality and value we bring to every project"
      />
      <div className="testimonial-section max-w-6xl mx-auto mt-[50px] sm:px-0 px-4 -z-[1]">
        <Swiper
          style={{ zIndex: -1 }}
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
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
