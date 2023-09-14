import PropTypes from 'prop-types';

const Testimonial = ({ image, text, highlight, author }) => {
  return (
    <div className="testimonial w-[33%] p-[25px] bg-white ">
      <img src={image} alt={author} />
      <h3 className='text-[18px] leading-6 font-semibold mt-[16px] mb-[18px] uppercase '> {highlight} </h3>
      <p>{text}</p>
      <p>- {author}</p>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Testimonial;
