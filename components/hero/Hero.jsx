'use client'
import Image from 'next/image'
import PersonalImg from '../../public/zk.png'; // Make sure this path is correct
import ToggleSkill from './SkillToggle'
export default function Hero() {

  return (
    <div className='bg-white w-[calc(100%-473px)] min-h-[100vh] flex justify-between items-center ml-[335px] pt-[93px] pl-[60px] pb-[74px] relative'>
    <div class="shape-blob"></div>
	<div class="shape-blob one"></div>


      <div className="content max-w-4xl">
        <h1 className='her-t text-8xl leading-[98px] font-[700] text-text '>
            I’m Zk Rana 
        </h1>

        <ToggleSkill/> 

        <p className='hero-desc text-base text-sub-head pt-4 max-w-lg '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
        
        <div className='w-[154px] h-12 mt-6'>
        <button
            type='button'
            className=' w-full bg-[#B0B0E6] flex justify-center items-center gap-3 px-[19.5px] py-[10px]'
            download
            aria-label='Download CV'
        >
            <span className=' text-xl '>Hire Me </span>
            <svg 
                className=' mt-1'
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_2655)">
                    <path d="M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z" fill="#2B2B2B"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_2655">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
        </div>
      </div>
      <figure className=' absolute right-[58px] bottom-0'>
        <Image src={PersonalImg} alt='Hero' />
      </figure>
    </div>
  );
}