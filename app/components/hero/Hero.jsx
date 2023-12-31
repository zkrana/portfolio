"use client";
import Image from "next/image";
import PersonalImg from "../../../public/zk.png";
import ToggleSkill from "./SkillToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="bg-[#1E293B] relative flex sm:flex-row flex-col justify-between items-center pt-32 sm:pl-[60px] pl-4 sm:pr-0 pr-4 overflow-hidden">
      <div
        className="absolute w-36 h-36 flex justify-center rounded-full items-center -left-10 -top-10
       transition-all hover:w-40 hover:h-40 text-3xl hover:text-4xl shadow-md hover:shadow-lg bg-[#121f34] text-white hover:!text-black hover:bg-[#f59d32] pl-3 pt-5"
      >
        <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
      </div>
      <div className="max-w-6xl mx-auto flex justify-between gap-8 sm:gap-10 lg:gap-14 items-end w-full pb-16 sm:pb-0 relative">
        <div className="content lg:w-[calc(65%-28px)] sm:w-[calc(65%-20px)] w-full sm:pb-16 pb-0">
          <h1 className="her-t 2xl:text-6xl text-4xl font-bold text-text uppercase">
            We&apos;re Lyzerslab
          </h1>

          <ToggleSkill />

          <p className="hero-desc text-base text-sub-head pt-4 max-w-lg ">
            Welcome to Lyzerslab, where innovation meets expertise. We
            specialize in full-stack and app development, offer top-notch domain
            and hosting services, excel in WP customization, and pride ourselves
            on crafting solid UI/UX designs.
          </p>
          <p className="hero-desc text-base text-sub-head pt-4">
            Let's elevate your digital presence together!
          </p>

          <div className="w-[154px] h-12 mt-6">
            <a
              href="#"
              type="button"
              className="btn w-full flex justify-center items-center gap-3 px-[19.5px] py-[10px] cursor-pointer"
              download
              aria-label="Download CV"
            >
              <span className="text-xl z-10">Hire Me</span>
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
            </a>
          </div>
        </div>
        <div className="lg:w-[calc(35%-28px)] sm:w-[calc(35%-20px)] w-full">
          <div class="shape-blob overflow-hidden"></div>
          <figure className="personalImg sm:absolute relative sm:right-[58px] sm:left-auto left-0 bottom-0">
            <Image src={PersonalImg} alt="Hero" />
          </figure>
        </div>
      </div>
    </div>
  );
}
