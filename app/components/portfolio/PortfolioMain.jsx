// PortfolioMain.js
import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "./portfolioData";
import { CSSTransition } from "react-transition-group";
import PopupModal from "./PopupModal"; // Make sure the path is correct
const PortfolioMain = () => {
  const [category, setCategory] = useState("all");

  const filterItems = (category) => {
    setCategory(category);
  };

  const filteredItems =
    category === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === category);

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="portfolio text-center mt-[50px] sm:px-0 px-4">
      <div className="filter-buttons flex flex-wrap gap-5 justify-center mt-4">
        <button
          className={`btns ${category === "all" ? "btn-active" : ""}`}
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          className={`btns ${
            category === "Web Development" ? "btn-active" : ""
          }`}
          onClick={() => filterItems("Web Development")}
        >
          Web Development
        </button>
        <button
          className={`btns ${category === "UI/UX Design" ? "btn-active" : ""}`}
          onClick={() => filterItems("UI/UX Design")}
        >
          UI/UX Design
        </button>
        <button
          className={`btns ${
            category === "WordPress Customization" ? "btn-active" : ""
          }`}
          onClick={() => filterItems("WordPress Customization")}
        >
          Wordpress
        </button>
      </div>

      <div className="portfolio-wrapper max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item, index) => (
          <div key={index} className="portfolio-items">
            <CSSTransition
              key={index}
              in={true}
              appear={true}
              timeout={500}
              classNames="fade"
            >
              <PortfolioItem key={index} item={item} openModal={openModal} />
            </CSSTransition>
          </div>
        ))}
      </div>

      {/* Moved the PopupModal outside the mapped items */}
      <div className={`modal ${selectedItem ? "show" : ""}`}>
        {/* Your modal content here */}
        {selectedItem && (
          <PopupModal
            imageUrl={selectedItem.image}
            title={selectedItem.title}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioMain;
