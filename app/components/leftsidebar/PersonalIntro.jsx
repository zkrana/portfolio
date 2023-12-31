import Image from "next/image";
import pImage from "@/public/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function PersonalIntro() {
  return (
    <div className="w-[220px] border-b border-[#F0F0F6] pb-4">
      <div>
        <Image src={pImage} alt="Portfolio Image" className="mx-auto" />
        <span className="block text-center text-lg text-text font-semibold capitalize mt-3">
          {" "}
          Ziaul Kabir{" "}
        </span>
        <span className="block text-center text-[15px] leading-5 text-sub-head capitalize">
          {" "}
          Front-end Developer{" "}
        </span>
      </div>

      <div className="social-media flex justify-center gap-[15px] mt-4">
        <a href="https://www.facebook.com/Engr.ZkRana" className="leftSocial">
          <FontAwesomeIcon
            icon={faFacebook}
            width={14}
            height={14}
            className="text-teal text-[#3b5998]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zkranadevs/"
          className="leftSocial"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            width={14}
            height={14}
            className="text-[#0072b1]"
          />
        </a>
        <a href="https://twitter.com/zkranao" className="leftSocial">
          <FontAwesomeIcon
            icon={faTwitter}
            width={14}
            height={14}
            className="text-[#00acee]"
          />
        </a>
        <a href="https://github.com/zkrana/" className="leftSocial">
          <FontAwesomeIcon
            icon={faGithub}
            width={14}
            height={14}
            className="text-[#6cc644]"
          />
        </a>
        <a href="https://www.youtube.com/zkrana" className="leftSocial">
          <FontAwesomeIcon
            icon={faYoutube}
            width={14}
            height={14}
            className="text-[#c4302b]"
          />
        </a>
      </div>
    </div>
  );
}
