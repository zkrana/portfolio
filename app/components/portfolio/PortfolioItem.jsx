import React from "react";
import Image from "next/image";

const PortfolioItem = ({ item, openModal }) => {
  const { title, image, live, description } = item;

  const handleOpenModal = () => {
    openModal(item);
  };

  return (
    <div className="portfolio-item">
      <div className="image-container">
        <Image
          src={image}
          alt={title}
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        />
        <div className="overlay">
          <div className="portfolio-content">
            <h3>{title}</h3>
            <p className="pt-2">{description}</p>
            <p className="my-3 font-semibold text-xl">
              <strong>Live link:</strong> <a href={live}>Click Me</a>
            </p>
            <button
              type="button"
              className="py-2 px-9 bg-[#f59a44] text-white mt-3 rounded-md shadow-md"
              onClick={handleOpenModal}
            >
              Show Full Screen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
