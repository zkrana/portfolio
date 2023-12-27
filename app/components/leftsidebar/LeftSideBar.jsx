import PersonalIntro from "./PersonalIntro";
import Availability from "./Availability";
import Skillbar from "./skill/Skillbar";
import ExtraSkill from "./ExtraSkill";
import Download from "./DownlodCV";

export default function LeftSideBar({ isMobile, showSidebar }) {
  return (
    <div
      className={`leftSideBar h-screen xl:pl-[40px] p-5 xl:pr-[45px] pr-6 pb-5 pt-[20px] bg-[#1E293B] fixed left-0 top-0 scroll-smooth transition-all hover:overflow-x-auto z-[99999] ${
        isMobile && !showSidebar ? "hidden" : ""
      }`}
    >
      <PersonalIntro />
      <Availability />
      <Skillbar />
      <ExtraSkill />
      <Download />
    </div>
  );
}
