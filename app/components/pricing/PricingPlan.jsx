// Reusable PricingPlan component
function PricingPlan({ title, price, features, desc, ribon }) {
  return (
    <div className="pricing-plans basis[32%] flex-grow bg-[#1E293B] px-[31px] pt-[54px] pb-6 relative -z-[1]">
      {ribon === "most popular" && (
        <span className="bg-[#B0B0E6] text-[#1E293B] w-full h-8 flex justify-center items-center absolute top-0 left-0 right-0 text-[15px] font-semibold leading-[18px] capitalize ">
          {ribon}
        </span>
      )}
      <h3 className="plan-title text-text text-2xl font-semibold text-center capitalize mb-5">
        {title}
      </h3>
      <h5 className="plan-price text-center mb-2">
        {" "}
        <span className=" text-text text-4xl font-[700]">${price}</span>{" "}
        <span className=" text-sub-head">/month</span>
      </h5>
      <p className="plan-desc block mx-auto text-sub-head text-[15px] leading-5 max-w-[248px] text-center pb-[21px]">
        {" "}
        {desc}
      </p>
      <ul className="plan-features min-h-[240px] mt-4">
        {features.map((feature, index) => (
          <li
            className="text-sub-head text-[15px] leading-5 mb-[17px] flex gap-2 "
            key={index}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3688 15.172L19.8998 5.979L21.367 7.393L10.3688 18L3.77002 11.636L5.23618 10.222L10.3688 15.172Z"
                fill="#B0B0E6"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {ribon === "most popular" ? (
        <button className="price-btn block mx-auto z-10 !bg-[#B0B0E6] !text-[#1E293B]">
          Choose Plan
        </button>
      ) : (
        <button className="price-btn block mx-auto z-10 transition-colors hover:bg-[#B0B0E6] hover:text-[#fff]">
          Choose Plan
        </button>
      )}
    </div>
  );
}

export default PricingPlan;
