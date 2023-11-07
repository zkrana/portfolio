"use client";
import Image from "next/image";
import PersonalImg from "../../../public/zk.png"; // Make sure this path is correct
import ToggleSkill from "./SkillToggle";

import { motion as m } from "framer-motion";
export default function Hero() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#1E293B] flex justify-between items-center pt-[93px] pl-[60px] pb-[74px] relative overflow-hidden"
    >
      <div class="shape-blob"></div>

      <div className="content xl:max-w-4xl max-w-sm">
        <h1 className="her-t 2xl:text-8xl xl:text-4xl text-2xl 2xl:leading-[98px] font-[700] text-text ">
          I’m Zk Rana
        </h1>

        <ToggleSkill />

        <p className="hero-desc text-base text-sub-head pt-4 max-w-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>

        <div className="w-[154px] h-12 mt-6">
          <button
            type="button"
            className="btn w-full flex justify-center items-center gap-3 px-[19.5px] py-[10px]"
            download
            aria-label="Download CV"
          >
            <span className="text-xl z-10">Hire Me</span> {/* Text color */}
            <svg
              className="mt-1 z-10"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_2655)">
                <path
                  d="M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z"
                  fill="#fff"
                />{" "}
                {/* Icon color */}
              </g>
              <defs>
                <clipPath id="clip0_2_2655">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <figure className="personalImg absolute right-[58px] bottom-0">
        <Image src={PersonalImg} alt="Hero" />
      </figure>
    </m.div>
  );
}
