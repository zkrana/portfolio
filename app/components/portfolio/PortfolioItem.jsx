// PortfolioItem.js
import React from "react";
import Image from "next/image";

const PortfolioItem = ({ title, image }) => {
  return (
    <a href="#" className="portfolio-item">
      <Image
        src={image}
        alt={title}
        width="100%"
        height="100%"
        className="w-full h-full object-cover"
      />
    </a>
  );
};

export default PortfolioItem;