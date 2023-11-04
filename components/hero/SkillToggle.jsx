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
  const [currentName, setCurrentName] = useState("");
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const skillChange = () => {
    const randomIndex = Math.floor(Math.random() * Skills.length);
    const newSkill = Skills[randomIndex].skill;

    // Start with 0 visible characters
    setVisibleCharacters(0);

    // Gradually reveal the characters
    const intervalId = setInterval(() => {
      setVisibleCharacters((prevCount) =>
        prevCount < newSkill.length ? prevCount + 1 : prevCount
      );
    }, 50); // Adjust the interval duration as needed

    // Set the new skill after revealing all characters
    setTimeout(() => {
      clearInterval(intervalId);
      setCurrentName(newSkill);
    }, newSkill.length * 50 + 500); // Adjust the delay as needed
  };

  useEffect(() => {
    skillChange();
    const intervalId = setInterval(() => {
      skillChange();
    }, 4000); // Adjust the interval duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <h4 className="skill-toggle 2xl:text-6xl xl:text-4xl text-2xl xl:leading-[98px] text-text font-bold ">
        <span> I am a </span>
        <span className={`skill-animation show ml-2`}>
          {" "}
          {currentName}{" "}
        </span>{" "}
      </h4>
    </div>
  );
}
