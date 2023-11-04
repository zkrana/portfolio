"use client";
import Image from "next/image";
import LeftSideBar from "@/components/leftsidebar/LeftSideBar";
import SecWrapper from "@/components/SecWrapper";
import RightSidebar from "@/components/rightsidebar/RightSidebar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core"; // Import library

library.add(faBars, faTimes); // Initialize FontAwesome library

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Call the event handler initially
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex gap-[30px] justify-between h-full">
      {isMobile && (
        <div
          className="text-white text-2xl cursor-pointer absolute left-4 top-7 z-[20]"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <FontAwesomeIcon icon={faTimes} /> // FontAwesome close icon
          ) : (
            <FontAwesomeIcon icon={faBars} /> // FontAwesome bars icon
          )}
        </div>
      )}

      {isMobile && showSidebar && (
        <LeftSideBar isMobile={isMobile} showSidebar={showSidebar} />
      )}

      {!isMobile && <LeftSideBar isMobile={isMobile} showSidebar={true} />}

      <SecWrapper />

      <RightSidebar />
    </div>
  );
}
