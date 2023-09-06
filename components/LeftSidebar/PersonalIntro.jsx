import Image from 'next/image';
import pImage from '@/public/Profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'; 

export default function PersonalIntro() {
  return (
        <div className=' border-b border-[#F0F0F6] pb-6'>
            <div>
                <Image src={pImage} alt='Portfolio Image' className='mx-auto' />
                <span className='block text-center text-lg text-text font-semibold capitalize mt-8'> Ziaul Kabir </span>
                <span className='block text-center text-[15px] leading-5 text-sub-head capitalize'> Front-end Developer </span>
            </div>

            <div className="social-media flex justify-center gap-[15px] mt-4">
                <a href="#" className='leftSocial'>
                    <FontAwesomeIcon icon={faFacebook} width={14} height={14} />
                </a>
                <a href="#" className='leftSocial'>
                    <FontAwesomeIcon icon={faInstagram} width={14} height={14} />
                </a>
                <a href="#" className='leftSocial'>
                <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
                </a>
                <a href="#" className='leftSocial'>
                    <FontAwesomeIcon icon={faGithub} width={14} height={14} />
                </a>
                <a href="#" className='leftSocial'>
                    <FontAwesomeIcon icon={faYoutube} width={14} height={14} />
                </a>
            </div>
        </div>
  )
}
