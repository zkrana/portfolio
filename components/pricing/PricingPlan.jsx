import { deepStrictEqual } from "assert";

// Reusable PricingPlan component
function PricingPlan({ title, price, features, desc }) {
    return (
      <div className="pricing-plans bg-white px-[31px] pt-[54px] pb-6 relative">
        <h3 className="plan-title text-text text-2xl font-semibold text-center capitalize mb-5 ">{title}</h3>
        <h5 className="plan-price text-center mb-2"> <span className=" text-text text-4xl font-[700] ">${price}</span> / month</h5>
        <p className="plan-desc text-sub-head text-[15px] leading-5 max-w-[248px] text-center pb-[21px] "> {desc}</p>
        <ul className="plan-features">
          {features.map((feature, index) => (
            <li className="text-sub-head text-[15px] leading-5 mb-[17px] flex gap-2 " key={index}> 
            
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3688 15.172L19.8998 5.979L21.367 7.393L10.3688 18L3.77002 11.636L5.23618 10.222L10.3688 15.172Z" fill="#FFB400"/>
            </svg>
            {feature}
            </li>
          ))}
        </ul>
        <button className="price-btn z-10">Choose Plan</button>
      </div>
    );
  }

  export default PricingPlan;