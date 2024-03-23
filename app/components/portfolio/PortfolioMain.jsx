import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "./portfolioData";
import PopupModal from "./PopupModal";

const PortfolioMain = () => {
  const [category, setCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItems = (category) => {
    setCategory(category);
    setVisibleItems(6); // Reset visible items when changing category
  };

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const filteredItems =
    category === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === category);

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
        {filteredItems.slice(0, visibleItems).map((item, index) => (
          <PortfolioItem key={index} item={item} openModal={openModal} />
        ))}
      </div>

      {visibleItems < filteredItems.length && (
        <button
          onClick={loadMore}
          className="max-w-[120px] mx-auto mt-10 rounded-lg px-[19.5px] py-[10px] transition-colors bg-[#f59d32] border border-[#f59d32] hover:text-white cursor-pointer hover:bg-[#1E293B] hover:border-bg-[#1E293B]"
        >
          Load More
        </button>
      )}

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
