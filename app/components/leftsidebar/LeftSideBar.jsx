import PersonalIntro from "./PersonalIntro";
import Availability from "./Availability";
import Skillbar from "./skill/Skillbar";
import ExtraSkill from "./ExtraSkill";
import Download from "./DownlodCV";
import { motion } from "framer-motion";

export default function LeftSideBar({ isMobile, showSidebar }) {
  const sidebarVariants = {
    hidden: {
      x: -300, // Initial position (off-screen to the left)
      opacity: 0,
    },
    visible: {
      x: 0, // Final position (on-screen)
      opacity: 1,
      transition: {
        duration: 0.5, // Adjust the duration as needed
        ease: "easeOut", // Adjust the easing function as needed
      },
    },
  };

  return (
    <motion.div
      className={`leftSideBar h-screen xl:pl-[40px] p-5 xl:pr-[45px] pr-6 pb-5 pt-[20px] bg-[#1E293B] xl:w-[305px] w-[280px] flex-shrink-0 fixed left-0 top-0 scroll-smooth transition-all hover:overflow-x-auto z-[99999] ${
        isMobile && !showSidebar ? "hidden" : ""
      }`}
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <PersonalIntro />
      <Availability />
      <Skillbar />
      <ExtraSkill />
      <Download />
    </motion.div>
  );
}
