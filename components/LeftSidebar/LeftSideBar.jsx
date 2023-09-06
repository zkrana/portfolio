import PersonalIntro from './PersonalIntro'
import Availability from './Availability'

export default function MyComponent() {
  return (
    <div className='h-screen pl-[40px] pr-[45px] pt-[50px] bg-white w-[305px] flex-shrink-0 fixed left-0 top-0'>
      <PersonalIntro />
      <Availability />
    </div>
  );
}
