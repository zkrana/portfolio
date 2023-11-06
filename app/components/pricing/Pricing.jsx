"use client";
import React from "react";
import Content from "../Content";
import PricingPlan from "./PricingPlan";

export default function Pricing() {
  // Demo data for pricing plans
  const demoPricingPlans = [
    {
      title: "Basic Plan",
      price: 19.99,
      desc: "For most businesses that want to optimize web queries",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      ribon: "most popular",
      title: "Standard Plan",
      price: 39.99,
      desc: "For most businesses that want to optimize web queries",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Premium Plan",
      price: 59.99,
      desc: "For most businesses that want to optimize web queries",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div>
      <Content
        title="Price plans"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
      />
      <div className="pricing-page mt-[51px]">
        <div className="pricing-plans-container max-w-6xl mx-auto flex flex-wrap justify-between gap-[21px]">
          {demoPricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              desc={plan.desc}
              ribon={plan.ribon}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
