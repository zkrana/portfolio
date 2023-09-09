import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
export default function SecWrapper
() {
  return (
    <div className='w-[calc(100%-473px)] ml-[335px] pb-10 '>
      <Hero />
      <Service />
    </div>
  )
}
