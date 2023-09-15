import React from 'react';
import Content from '../Content';
import Testimonial from './Testimonial';
export default function Reviews() {
  const testimonials = [
    {
      image: '/_next/static/media/review-1.a90e42d3.svg',
      highlight: 'Best Work',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
    },
    {
      image: '/_next/static/media/review-2.84e7d9cb.svg', // Use a leading slash for relative paths
      highlight: 'I will be back again',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      author: 'Jane Smith',
    },
    {
      image: '/_next/static/media/review-3.075a3f8d.svg', // Use a leading slash for relative paths
      highlight: 'Amazing man',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      author: 'Jane Smith',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="reviews">
      <Content
        title="recommendations"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="testimonial-section max-w-6xl mx-auto mt-[50px] flex flex-wrap justify-between gap-3">
      {testimonials.map((testimonial, index) => {
        return (
          <Testimonial
            key={index}
            image={testimonial.image}
            highlight={testimonial.highlight}
            text={testimonial.text}
            author={testimonial.author}
          />
        );
      })}
      </div>
    </div>
  );
}
