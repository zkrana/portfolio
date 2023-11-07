import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "./portfolioData";
import { CSSTransition } from "react-transition-group";

const PortfolioMain = () => {
  const [category, setCategory] = useState("all");

  const filterItems = (category) => {
    setCategory(category);
  };

  const filteredItems =
    category === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === category);

  return (
    <div className="portfolio text-center">
      <div className="filter-buttons flex flex-wrap gap-5 justify-center mt-4">
        <button
          className={`btns ${category === "all" ? "btn-active" : ""}`}
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          className={`btns ${category === "Web Design" ? "btn-active" : ""}`}
          onClick={() => filterItems("Web Design")}
        >
          Web Design
        </button>
        <button
          className={`btns ${
            category === "App Development" ? "btn-active" : ""
          }`}
          onClick={() => filterItems("App Development")}
        >
          App Development
        </button>
      </div>

      <div className="portfolio-items max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item, index) => (
          <CSSTransition
            key={index}
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <PortfolioItem key={index} {...item} />
          </CSSTransition>
        ))}
      </div>
    </div>
  );
};

export default PortfolioMain;
