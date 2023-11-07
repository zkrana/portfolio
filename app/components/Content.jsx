import React from "react";

export default function Content({ title, description }) {
  return (
    <div className=" 2xl:mt-[126px] xl:mt-[112px] lg:mt-[80px] tab:mt-[55px] mt-[44px] ">
      <h2 className="title text-[32px] leading-[45px] text-text font-[700] text-center capitalize">
        {" "}
        {title}{" "}
      </h2>
      <p className="sec-desc max-w-md mx-auto text-[15px] leading-[25px] text-sub-head text-center pt-[25px] ">
        {description}
      </p>
    </div>
  );
}
