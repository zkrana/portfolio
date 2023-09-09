import Image from 'next/image'
import LeftSideBar from '@/components/leftsidebar/LeftSideBar'
import SecWrapper from '@/components/SecWrapper'
import RightSidebar from '@/components/rightsidebar/RightSidebar'

export default function Home() {
  return (
    <div className='w-full flex gap-[30px] justify-between h-ful'>
      <LeftSideBar />
      <SecWrapper />
      <RightSidebar />
    </div>
  )
}
