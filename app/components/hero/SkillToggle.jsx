"use client";
import React, { useEffect, useState } from "react";

export default function SkillToggle() {
  const Skills = [
    {
      id: 1,
      skill: "Front-end Developer",
    },
    {
      id: 2,
      skill: "Domain, Hosting Expert",
    },
    {
      id: 3,
      skill: "WordPress Expert",
    },
    {
      id: 4,
      skill: "Dreamer",
    },
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const skillChange = () => {
    // Start with 0 visible characters
    setVisibleCharacters(0);

    // Get the current skill and its length
    const currentSkill = Skills[currentSkillIndex].skill;
    const skillLength = currentSkill.length;

    // Gradually reveal the characters
    const intervalId = setInterval(() => {
      setVisibleCharacters((prevCount) =>
        prevCount < skillLength ? prevCount + 1 : prevCount
      );
    }, 50); // Adjust the interval duration as needed

    // Set the new skill after revealing all characters
    setTimeout(() => {
      clearInterval(intervalId);

      // Update to the next skill index, or wrap around if needed
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === Skills.length - 1 ? 0 : prevIndex + 1
      );
    }, skillLength * 50 + 500); // Adjust the delay as needed
  };

  useEffect(() => {
    skillChange();
    const intervalId = setInterval(skillChange, 4000); // Skill change every 4 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <h4 className="skill-toggle 2xl:text-6xl xl:text-4xl text-2xl xl:leading-[98px] text-text font-bold ">
        <span className="font-normal"> I am a </span>
        <span className={`skill-animation show ml-2`}>
          {" "}
          {Skills[currentSkillIndex].skill}{" "}
        </span>{" "}
      </h4>
    </div>
  );
}
