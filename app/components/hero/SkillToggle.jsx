"use client";
import React, { useEffect, useState } from "react";

export default function SkillToggle() {
  const Skills = [
    {
      id: 1,
      skill: "Full-Stack Developement",
    },
    {
      id: 2,
      skill: "App Developement",
    },
    {
      id: 3,
      skill: "Domain, Hosting Service",
    },
    {
      id: 4,
      skill: "WP Customization",
    },
    {
      id: 5,
      skill: "Solid UI/UX Design",
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
  }, [10000]);

  return (
    <div className="flex items-center gap-2 mt-4">
      <h4 className="skill-toggle xl:text-4xl text-2xl text-text font-bold uppercase ">
        <span className="font-normal"> We Provide </span>
        <span className={`skill-animation show ml-2`}>
          {" "}
          {Skills[currentSkillIndex].skill}{" "}
        </span>{" "}
      </h4>
    </div>
  );
}
