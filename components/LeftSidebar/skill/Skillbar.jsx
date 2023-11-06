import React from "react";
import LanguageComponent from "./Languages";
import SkillComponent from "./Skills";

export default function App() {
  const languagesData = [
    { name: "Bangla", className: "bangla", percentage: "95%" },
    { name: "English", className: "english", percentage: "90%" },
    { name: "Hindi", className: "hindi", percentage: "75%" },
  ];

  const skillsData = [
    { name: "HTML", className: "bangla", percentage: "95%" },
    { name: "Tailwind", className: "english", percentage: "90%" },
    { name: "Javascript", className: "js", percentage: "65%" },
    { name: "React", className: "react", percentage: "45%" },
    { name: "NEXT JS", className: "next", percentage: "35%" },
  ];

  return (
    <div className="w-[220px]">
      <LanguageComponent languages={languagesData} />
      <SkillComponent skills={skillsData} />
    </div>
  );
}
