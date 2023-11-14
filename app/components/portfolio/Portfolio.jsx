import React from "react";
import Content from "../Content";
import PortfolioMain from "./PortfolioMain";

export default function Portfolio() {
  return (
    <div>
      <Content
        title="Portfolio"
        description="Dive into our portfolio to witness how we transform ideas into impactful digital solutions, tailored to exceed expectations and drive success for our clients"
      />
      <PortfolioMain />
    </div>
  );
}
