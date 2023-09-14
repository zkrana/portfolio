import React from 'react'
import Content from '../Content'
import Testmonial from './Testmonial';
export default function Reviews() {
    const testimonials = [
        {
          image: 'testimonial1.jpg',
          highlight: 'Best Work',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'John Doe',
        },
        {
          image: 'testimonial2.jpg',
          highlight: 'I will back again',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
          author: 'Jane Smith',
        },
        {
          image: 'testimonial2.jpg',
          highlight: 'Amazing man',
          text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
          author: 'Jane Smith',
        },
        // Add more testimonials as needed
      ];
  return (
    <div className='reviews'>
        <Content 
            title='recommendations'
            description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
        />
        <div className="testimonial-section max-w-5xl mx-auto mt-[55px] flex justify-between gap-[25px] ">
            {testimonials.map((testimonial) => (
                <Testmonial key={testimonial.id} {...testimonial} />
            ))}
        </div>

    </div>
  )
}
