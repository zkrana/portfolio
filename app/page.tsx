import Image from 'next/image'
import LeftSideBar from '@/components/leftsidebar/LeftSideBar'
import Hero from '@/components/Hero'
import RightSidebar from '@/components/rightsidebar/RightSidebar'

export default function Home() {
  return (
    <div className='w-full flex gap-[30px] justify-between h-ful'>
      <LeftSideBar />
      <Hero />
      <RightSidebar />
    </div>
  )
}
