import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faPhone,
  faGit,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./menu.css";
function Header() {
  const [nav, setNav] = useState(false);

  const showMenu = () => {
    setNav(true);
  };
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="h-20 fixed sm:-left-10 -left-6 sm:-top-10 -top-6 z-30">
      <div
        className="sm:w-36 w-20 sm:h-36 h-20 flex justify-center rounded-full items-center 
       transition-all sm:hover:w-40 hover:w-24 sm:hover:h-40 hover:h-24 sm:text-3xl text-2xl sm:hover:text-4xl hover:text-3xl shadow-md hover:shadow-lg bg-[#121f34] duration-700 text-white hover:!text-black hover:bg-[#f59d32] pl-3 pt-5"
      >
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={showMenu}
          icon={faBars}
        />
      </div>
      {nav && <MyNavigation closeMenu={closeMenu} />}
    </div>
  );
}

function MyNavigation({ closeMenu }) {
  const menuItems = ["Home", "Services", "Our Work", "Career", "Contact"];

  return (
    <div>
      <div
        className="absolute bg-[#121f34] sm:!top-10 !top-6 bottom-0 sm:!left-10 !left-6 right-0 w-screen h-screen
        flex justify-center items-center transition-all"
      >
        <div className="w-full flex justify-end absolute top-0 sm:px-14 px-6 sm:pt-10 pt-6">
          <div className=" bg-black shadow animate-spin hover:animate-none shadow-slate-300 rounded-full sm:w-10 w-8 transition-all sm:hover:w-12 hover:w-10 sm:h-10 h-8 sm:hover:h-12 hover:h-10 flex justify-center items-center ">
            <FontAwesomeIcon
              className=" cursor-pointer text-white text-2xl"
              onClick={closeMenu}
              icon={faClose}
            />
          </div>
        </div>

        <ul className="relative max-w-sm mx-auto flex flex-col sm:gap-10 gap-4 justify-center items-center text-center sm:text-5xl text-4xl font-bold uppercase text-white">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>

        <div className=" lg:max-w-4xl w-[90%] mx-auto flex justify-between lg:flex-row flex-col items-center gap-6 absolute sm:bottom-10 bottom-20">
          <div className="flex sm:justify-center sm:items-center sm:gap-6 gap-3 text-white">
            <a
              href="mailto:zkranao@gmail.com"
              className="sm:text-lg text-sm flex items-center sm:gap-2 gap-1 bg-black rounded shadow sm:px-6 px-2 py-2 hover:text-slate-300 transition-colors duration-500"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              <span className=" block sm:-mt-[6px] -mt-[3px]">
                zkranao@gmail.com
              </span>
            </a>

            <a
              href="tel:01824228717"
              className="sm:text-lg text-sm flex items-center sm:gap-2 gap-1 bg-black rounded shadow sm:px-6 px-2 py-2 hover:text-slate-300 transition-colors duration-500"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>01824-228-717</span>
            </a>
          </div>

          <div className="social flex sm:gap-3 gap-2 items-center">
            <a
              href="https://github.com/zkrana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="bg-black text-[#2b3137] transition-colors hover:text-white rounded shadow px-4 py-2 cursor-pointer"
              />
            </a>
            <a
              href="https://www.youtube.com/zkrana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="bg-black rounded shadow text-[#cc181e] transition-colors hover:text-white px-4 py-2 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zkranadevs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="bg-black rounded shadow text-[#0077b5] transition-colors hover:text-white px-4 py-2 cursor-pointer"
              />
            </a>
            <a
              href="skype:zkranao?chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSkype}
                className="bg-black rounded shadow text-[#00aff0] transition-colors hover:text-white px-4 py-2 cursor-pointer"
              />
            </a>
            <a
              href="https://wa.me/01824228717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="bg-black rounded shadow text-[#075e54] transition-colors hover:text-white px-4 py-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
