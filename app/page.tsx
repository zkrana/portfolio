import Image from 'next/image'
import LeftSideBar from '@/components/LeftSidebar/LeftSideBar'
import Hero from '@/components/Hero'
import RightSidebar from '@/components/RightSidebar/RightSidebar'

export default function Home() {
  return (
    <div className='w-full flex gap-[30px] justify-between h-screen'>
      <LeftSideBar />
      <Hero />
      <RightSidebar />
    </div>
  )
}
