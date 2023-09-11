import React from 'react'

export default function Content({title, description}) {
  return (
    <div className='mt-[126px]'>
        <h2 className='title text-[32px] leading-[45px] text-text font-[700] text-center capitalize'> {title} </h2>
        <p className='sec-desc max-w-md mx-auto text-[15px] leading-[25px] text-sub-head text-center pt-[25px] '>
            {description}
        </p>

    </div>
  )
}
