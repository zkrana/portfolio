"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import LeftSideBar from "@/components/leftsidebar/LeftSideBar";
import SecWrapper from "@/components/SecWrapper";
import RightSidebar from "@/components/rightsidebar/RightSidebar";

library.add(faBars, faTimes);

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

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
            <div className="fixed top-0 left-0 right-0 pl-5 pt-4">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      )}

      {isMobile && showSidebar && (
        <LeftSideBar isMobile={isMobile} showSidebar={showSidebar} />
      )}

      {!isMobile && <LeftSideBar isMobile={isMobile} showSidebar={true} />}

      <SecWrapper />

      {!isMobile && <RightSidebar />}
    </div>
  );
}
