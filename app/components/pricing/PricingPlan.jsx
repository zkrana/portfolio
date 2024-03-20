import React from "react";
import Content from "../Content";

const PricingColumn = ({ title, price, features }) => {
  return (
    <div className="flex md:w-[calc(33.3333%-10.6666px)] sm:w-[calc(50%-10px)] w-full flex-col justify-between bg-slate-800 border border-gray-600 shadow-lg transition-colors hover:shadow-sm hover:shadow-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-200">{title}</h2>
      <div className="mt-4">
        <span className="text-5xl font-bold text-gray-100">${price}</span>
        <span className="text-gray-200"> / Website</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5.172 10.172a.5.5 0 01.708 0L9 12.793l5.12-5.121a.5.5 0 01.707.707l-5.5 5.5a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.707z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="mt-6 bg-blue-500 text-center text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
      >
        Get Started
      </a>
    </div>
  );
};

const PricingPlan = () => {
  return (
    <>
      <Content
        title="Price plans"
        description="Our pricing plans are tailored to fit your needs, offering scalable solutions for every budget"
      />
      <div className="flex flex-wrap md:max-w-5xl w-[90%] mx-auto gap-5 md:gap-4 justify-center mt-10">
        <PricingColumn
          title="Basic"
          price="109.99"
          features={[
            "Premium Theme Installation",
            "5 Pages",
            "WordPress Theme Customization",
            "Basic SEO Setup",
            "Speed Optimization",
          ]}
        />
        <PricingColumn
          title="Standard"
          price="179.99"
          features={[
            "Premium Theme Installation",
            "10 Pages",
            "eCommerce Functionality",
            "Speed Optimization",
            "Payment Gateway Integration",
          ]}
        />
        <PricingColumn
          title="Custom"
          price="custom"
          features={[
            "Unlimited Pages",
            "Advanced SEO Optimization",
            "24/7 Support",
          ]}
        />
      </div>
    </>
  );
};

export default PricingPlan;
