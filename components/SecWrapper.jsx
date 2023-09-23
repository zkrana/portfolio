import React, {Suspense} from 'react'

const Hero =  React.lazy( ()=> import("./hero/Hero") );
const Service =  React.lazy( ()=> import("./service/Service") );
const Pricing =  React.lazy( ()=> import("./pricing/Pricing") );
const Reviews =  React.lazy( ()=> import("./reviews/Reviews") );
const Education =  React.lazy( ()=> import("./education/Educations") );
const Portfolio =  React.lazy( ()=> import("./portfolio/Portfolio") );

export default function SecWrapper
() {
  return (
    <div className='w-[calc(100%-473px)] ml-[335px] pb-10 '>
      <Suspense fallback={<div> Hero is Loading... </div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div> Service is Loading... </div>}>
        <Service />
      </Suspense>

      <Suspense fallback={<div> Pricing is Loading... </div>}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<div> Reviews is Loading... </div>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<div> Education is Loading... </div>}>
        <Education />
      </Suspense>
      
      <Suspense fallback={<div> Portfolio is Loading... </div>}>
        <Portfolio />
      </Suspense>
    </div>
  )
}
