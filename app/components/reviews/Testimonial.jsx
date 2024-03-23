import PropTypes from "prop-types";
import { useState } from "react";
import Image from "next/image";

const Testimonial = ({ image, text, highlight, author, position, rating }) => {
  const [userRating, setUserRating] = useState(rating);

  return (
    <div className="testimonial relative w-full p-[25px] bg-[#1E293B]">
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < userRating ? "filled" : ""}`}
            style={{ color: index < userRating ? "gold" : "gray" }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <h3 className="text-[18px] text-white leading-6 font-semibold mt-[16px] mb-[18px] uppercase">
        {highlight}
      </h3>
      <p className="text-sub-head text-[15px] leading-5 mt-4">{text}</p>

      <div className="flex items-center gap-4 mt-[30px]">
        {typeof image === "string" ? ( // Check if image is a string
          <Image src={image} alt={author} width="100" height="100" />
        ) : (
          // If it's not a string, handle accordingly
          <div>No image available</div>
        )}
        <div>
          <p className="text-[18px] leading-6 text-text mb-[5px] font-semibold">
            {author}
          </p>
          <span className="text-[15px] leading-5 text-sub-head ">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Allow image prop to be either string or object
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Testimonial;
