// PortfolioItem.js
import React from 'react';
import Image from 'next/image';

const PortfolioItem = ({ title, image }) => {
  return (
    <div className="portfolio-item">
      <Image src={image} alt={title} width="100%" height="100%" />
    </div>
  );
};

export default PortfolioItem;