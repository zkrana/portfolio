import React from 'react'

export default function Availability() {
  return (
    <div className=' border-b border-[#F0F0F6] pb-4 mt-4'>
        <ul>
            <li className='flex justify-between items-center text-[15px] leading-7 capitalize mb-2'> 
                <span className='bg-bg text-text px-2'> Age: </span>  
                <span> 30 </span>
            </li>
            <li className='flex justify-between items-center text-[15px] leading-7 capitalize mb-2'> 
                <span className='bg-bg text-text px-2'> Residence: </span>  
                <span> BD </span>
            </li>
            <li className='flex justify-between items-center text-[15px] leading-7 capitalize mb-2'> 
                <span className='bg-bg text-text px-2'> Freelance: </span>  
                <span className='text-[#7EB942]'> Available </span>
            </li>
            <li className='flex justify-between items-center text-[15px] leading-7 capitalize mb-2'> 
                <span className='bg-bg text-text px-2'> Address: </span>  
                <span> Dhaka,Bangladesh </span>
            </li>
        </ul>
    </div>
  )
}