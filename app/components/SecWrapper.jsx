import React, { Suspense } from "react";

const Hero = React.lazy(() => import("./hero/Hero"));
const Service = React.lazy(() => import("./service/Service"));
const Pricing = React.lazy(() => import("./pricing/PricingPlan"));
const Reviews = React.lazy(() => import("./reviews/Reviews"));
const Education = React.lazy(() => import("./education/WhyChooseUS"));
const Portfolio = React.lazy(() => import("./portfolio/Portfolio"));
const Blog = React.lazy(() => import("./blog/BlogHead"));
const Newsletter = React.lazy(() => import("./Newsletter"));

export default function SecWrapper() {
  return (
    <div className="secContentWrap">
      <Suspense
        fallback={<div className=" animate-spin"> Hero is Loading... </div>}
      >
        <Hero />
      </Suspense>

      <Suspense
        fallback={<div className=" animate-spin"> Service is Loading... </div>}
      >
        <Service />
      </Suspense>

      <Suspense
        fallback={<div className=" animate-spin"> Pricing is Loading... </div>}
      >
        <Pricing />
      </Suspense>

      <Suspense
        fallback={<div className=" animate-spin"> Reviews is Loading... </div>}
      >
        <Reviews />
      </Suspense>

      <Suspense
        fallback={
          <div className=" animate-spin"> Education is Loading... </div>
        }
      >
        <Education />
      </Suspense>
      <Suspense
        fallback={
          <div className=" animate-spin"> Portfolio is Loading... </div>
        }
      >
        <Portfolio />
      </Suspense>
      <Suspense
        fallback={<div className=" animate-spin"> Blog is Loading... </div>}
      >
        <Blog />
      </Suspense>
      <Suspense
        fallback={
          <div className=" animate-spin"> Newsletter is Loading... </div>
        }
      >
        <Newsletter />
      </Suspense>
    </div>
  );
}
