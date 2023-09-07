import PersonalIntro from './PersonalIntro'
import Availability from './Availability'
import Skillbar from './skill/Skillbar'
import ExtraSkill from './ExtraSkill'
import Download from './DownlodCV'

export default function MyComponent() {
  return (
    <div className='h-screen pl-[40px] pr-[45px] pb-5 pt-[20px] bg-white w-[305px] flex-shrink-0 fixed left-0 top-0 overflow-x-scroll'>
      <PersonalIntro />
      <Availability />
      <Skillbar />
      <ExtraSkill />
      <Download />
    </div>
  );
}
