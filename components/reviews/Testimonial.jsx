import PropTypes from 'prop-types';

const Testimonial = ({ image, text, highlight, author }) => {
  return (
    <div className="testimonial w-[32%] p-[25px] bg-white ">
      <h3 className='text-[18px] leading-6 font-semibold mt-[16px] mb-[18px] uppercase'>{highlight}</h3>

      <p className=' text-sub-head text-[15px] leading-5 mt-4'>{text}</p>

      <div className='flex items-center gap-4 mt-[30px]'>
        <img src={image} alt={author} />
        <div>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired, // Add PropTypes for highlight
  author: PropTypes.string.isRequired,
};

export default Testimonial;
